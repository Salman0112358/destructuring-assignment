function listFollowers(followerNames: string[]): string {
  // complete function
  // use array destructuring, for practice!
  const [follower1, follower2] = followerNames

  return `Followed by ${follower1}, ${follower2} and others`
}

export default listFollowers;
