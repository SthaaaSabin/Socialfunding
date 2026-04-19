export interface MenuItem {
  id: number;
  label: string;
  href: string;
}

export const menuItems: MenuItem[] = [
  { id: 1, label: "About GSF", href: "#about" },
  { id: 2, label: "Photos", href: "#photos" },
  { id: 3, label: "Our Approach", href: "#mission" },
  { id: 4, label: "Programs", href: "#programs" },
  { id: 5, label: "Partner With Us", href: "#involved" },
  { id: 6, label: "Our Team", href: "#team" },
];
