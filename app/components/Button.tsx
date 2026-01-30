import { FC, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type BaseProps = {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: never;
  };

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  // Base styles
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

  // Variant styles
  const variantStyles = {
    primary:
      'bg-brand-sun text-black hover:bg-[#E0A030] shadow-lg hover:shadow-xl hover:scale-105 focus:ring-2 focus:ring-brand-sun focus:ring-offset-2',
    secondary:
      'bg-transparent border-2 border-brand-sea text-brand-sea hover:bg-brand-sea/10 focus:ring-2 focus:ring-brand-sea focus:ring-offset-2',
  };

  // Size styles
  const sizeStyles = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  // Combine all styles
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  // Render as link if href is provided
  if ('href' in props && props.href) {
    return (
      <a className={combinedStyles} {...props}>
        {children}
      </a>
    );
  }

  // Render as button
  return (
    <button className={combinedStyles} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
};

export default Button;
