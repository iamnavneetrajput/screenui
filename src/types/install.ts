// types/install.ts
export type PackageManager = 'npm' | 'pnpm' | 'yarn';
export type Language = 'typescript' | 'javascript';

export interface InstallData {
  dependencies?: Record<PackageManager, string[]>;
  cli?: Record<PackageManager, Partial<Record<Language, string[]>>>;
}
