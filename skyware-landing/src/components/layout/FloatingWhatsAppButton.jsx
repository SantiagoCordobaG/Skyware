import { MessageCircle } from "lucide-react";
import { siteConfig } from "../../config/site";
import Button from "../ui/Button";

export default function FloatingWhatsAppButton() {
  return (
    <Button
      href={siteConfig.whatsapp.url}
      variant="icon"
      showArrow={false}
      ariaLabel={siteConfig.whatsapp.ariaLabel}
      className="fixed bottom-5 right-5 z-50"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </Button>
  );
}
