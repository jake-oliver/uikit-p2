export interface FooterTheme {
  background: string;
}

export interface FooterProps {
  theme?: string;
}

export interface FooterEntry {
  label: string;
  icon: string;
  href?: string;
  calloutClass?: string;
  initialOpenState?: boolean;
}
