import { Button } from "@/components/ui/button";

export default function LinkButton({ href, children, variant = "default", className = "" }) {
  return (
    <Button asChild variant={variant} className={`rounded-full transition-all ${className}`}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Button>
  );
}
