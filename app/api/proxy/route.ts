import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { leetcode, codeforces } = await request.json();
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 9500);

    const leetcodeGQL = JSON.stringify({
      query: `
        query userContestRankingInfo($username: String!) {
          userContestRanking(username: $username) {
            attendedContestsCount
            rating
            globalRanking
          }
          matchedUser(username: $username) {
            submitStats {
              acSubmissionNum {
                difficulty
                count
              }
            }
          }
        }
      `,
      variables: { username: leetcode }
    });

    const [lcRes, cfInfo, cfStatus] = await Promise.allSettled([
      leetcode?.trim() 
        ? fetch(`https://leetcode.com/graphql`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: leetcodeGQL,
            signal: controller.signal
          }).then(res => res.json()) 
        : Promise.resolve(null),
      
      codeforces?.trim() 
        ? fetch(`https://codeforces.com/api/user.info?handles=${codeforces}`, { signal: controller.signal }).then(res => res.json()) 
        : Promise.resolve(null),

      codeforces?.trim() 
        ? fetch(`https://codeforces.com/api/user.status?handle=${codeforces}`, { signal: controller.signal }).then(res => res.json()) 
        : Promise.resolve(null),
    ]);

    clearTimeout(timeoutId);

    let leetcodeData = null;
    if (lcRes.status === 'fulfilled' && lcRes.value?.data) {
      const data = lcRes.value.data;
      const solved = data.matchedUser?.submitStats?.acSubmissionNum;
      leetcodeData = {
        totalSolved: solved?.find((s: any) => s.difficulty === "All")?.count || 0,
        easySolved: solved?.find((s: any) => s.difficulty === "Easy")?.count || 0,
        mediumSolved: solved?.find((s: any) => s.difficulty === "Medium")?.count || 0,
        hardSolved: solved?.find((s: any) => s.difficulty === "Hard")?.count || 0,
        contestRanking: data.userContestRanking || null
      };
    }

    let codeforcesData = null;
    if (cfInfo.status === 'fulfilled' && cfInfo.value?.status === "OK") {
      codeforcesData = cfInfo.value.result[0];
      if (cfStatus.status === 'fulfilled' && cfStatus.value?.status === "OK") {
        const solved = new Set();
        cfStatus.value.result.forEach((s: any) => {
          if (s.verdict === "OK") solved.add(`${s.problem.contestId}${s.problem.index}`);
        });
        codeforcesData.solvedCount = solved.size;
      }
    }

    return NextResponse.json({ leetcode: leetcodeData, codeforces: codeforcesData });
  } catch (error) {
    return NextResponse.json({ leetcode: null, codeforces: null }, { status: 200 });
  }
}