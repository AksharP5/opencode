declare module "semver" {
  const semver: {
    satisfies(version: string, range: string): boolean
    lt(version: string, other: string): boolean
  }

  export default semver
}
