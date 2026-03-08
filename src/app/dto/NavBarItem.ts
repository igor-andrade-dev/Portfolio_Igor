export interface NavBarItem {
  label: string;
  link?: string;
  exact?: boolean;
  children?: {
    label: string;
    link: string;
    external?: boolean;
  }[];
}