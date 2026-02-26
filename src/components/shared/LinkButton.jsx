import { Button } from "@/components/ui/button";

export default function LinkButton({ href, children, variant = "default" }) {
  return (
    <Button asChild variant={variant} className="rounded-full transition-all">
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Button>
  );
}
