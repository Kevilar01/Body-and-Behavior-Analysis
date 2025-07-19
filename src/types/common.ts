
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SectionProps extends BaseComponentProps {
  id?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
}

export interface CardProps extends BaseComponentProps {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}

export interface TestimonialProps {
  id: string;
  name: string;
  content: string;
  rating?: number;
  avatar?: string;
}

export interface FAQItemProps {
  id: string;
  question: string;
  answer: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

// Loading states
export interface LoadingState {
  isLoading: boolean;
  error?: string | null;
}

// API Response types
export interface ApiResponse<T = any> {
  data: T;
  success: boolean;
  message?: string;
}
