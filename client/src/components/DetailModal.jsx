import { X, ExternalLink, Check } from "lucide-react";
import PlatformBadge from "./PlatformBadge";

const PriceRow = ({ label, value, highlight }) => (
  <div className={`flex justify-between py-1.5 ${highlight ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
    <span className="text-sm">{label}</span>
    <span className="text-sm">{value}</span>
  </div>
);

const DetailModal = ({ result, onClose }) => {
  const cheapest = result?.allPlatforms?.length
  ? result.allPlatforms.reduce((a, b) =>
      a.finalPrice <= b.finalPrice ? a : b
    )
  : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" />
      <div
        className="relative bg-card border border-border rounded-3xl w-full max-w-lg p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 h-8 w-8 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <h2 className="font-heading font-bold text-xl mb-1 pr-10">{result.name}</h2>
        {result.cuisine && <p className="text-sm text-muted-foreground mb-6">{result.cuisine}</p>}

        <div className="space-y-4">
          {result?.allPlatforms?.map((p) => {
            const isBest = p.platform === cheapest.platform && p.finalPrice === cheapest.finalPrice;
            return (
              <div
                key={p.platform}
                className={`rounded-2xl border p-4 transition-colors ${
                  isBest ? "border-best-deal bg-best-deal/5" : "border-border"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <PlatformBadge platform={p.platform} size="md" />
                    {isBest && (
                      <span className="flex items-center gap-1 text-xs font-semibold text-best-deal bg-best-deal/10 px-2 py-1 rounded-lg">
                        <Check className="h-3 w-3" /> Best Deal
                      </span>
                    )}
                  </div>
                  <span className="font-heading font-bold text-2xl">₹{p.finalPrice}</span>
                </div>

                <div className="border-t border-border pt-2">
                  <PriceRow label="Base Price" value={`₹${p.basePrice}`} />
                  <PriceRow label="Discount" value={p.discount > 0 ? `-₹${p.discount}` : "—"} />
                  <PriceRow label="Delivery" value={p.delivery === 0 ? "FREE" : `+₹${p.delivery}`} />
                  <div className="border-t border-border mt-1 pt-1">
                    <PriceRow label="Final Price" value={`₹${p.finalPrice}`} highlight />
                  </div>
                </div>

                <button
                  onClick={() => window.open(p.redirectUrl, "_blank")}
                  className={`w-full mt-3 h-10 rounded-xl font-heading font-semibold text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
                    isBest
                      ? "bg-best-deal text-primary-foreground hover:opacity-90"
                      : "border border-border text-foreground hover:bg-secondary"
                  }`}
                >
                  Order on {p.platform} <ExternalLink className="h-3.5 w-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
