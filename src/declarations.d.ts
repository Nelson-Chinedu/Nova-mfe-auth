declare module "*.html" {
  const rawHtmlFile: string;
  export = rawHtmlFile;
}

declare module "*.bmp" {
  const src: string;
  export default src;
}

declare module "*.gif" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "@NovaOrg/nova-mfe-shared-ui" {
  import React, {
    ButtonHTMLAttributes,
    ComponentPropsWithoutRef,
    FC,
    HTMLAttributes,
    InputHTMLAttributes,
    ReactNode,
  } from "react";

  // Define the types for your shared components
  export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "outline" | "danger";
    size?: "sm" | "md" | "lg";
  }
  export const Button: React.FC<ButtonProps>;

  export interface TypographyProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
    className?: string;
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  }

  export const Typography: FC<TypographyProps>;

  export type InputProps = ComponentPropsWithoutRef<"input"> & {
    label?: string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    containerClassName?: string;
  };

  export const Input: React.FC<InputProps>;

  export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    className?: string;
    /** 1 is subtle, 3 is very prominent */
    elevation?: 1 | 2 | 3;
    /** Whether the card should lift on hover */
    interactive?: boolean;
  }
  export const Card: FC<CardProps>;

  export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    variant?: "sm" | "md" | "lg";
    containerClassName?: string;
    label?: string;
  }

  export const Checkbox: FC<CheckboxProps>;

  export function publicApiFunction(): void;

  // Add other components here as you create them
  // export const Input: React.FC<any>;
}
