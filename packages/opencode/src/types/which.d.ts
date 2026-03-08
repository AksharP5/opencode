declare module "which" {
  interface WhichSyncOptions {
    nothrow?: boolean
    path?: string
    pathExt?: string
  }

  const which: {
    sync(command: string, options?: WhichSyncOptions): string | null | undefined
  }

  export default which
}
