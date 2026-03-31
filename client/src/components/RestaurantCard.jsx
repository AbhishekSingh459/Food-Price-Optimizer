import { ExternalLink, Eye, Star } from "lucide-react";
import PlatformBadge from "./PlatformBadge";

const RestaurantCard = ({ result, onViewDetails }) => {
  const { name, rating, cuisine, bestPlatform } = result;

  return (
    <div className="group bg-card border border-border rounded-2xl p-5 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 transition-all duration-300">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-heading font-semibold text-lg text-foreground truncate">{name}</h3>
            {rating && (
              <span className="flex items-center gap-0.5 text-sm font-medium text-best-deal shrink-0">
                <Star className="h-3.5 w-3.5 fill-current" />
                {rating}
              </span>
            )}
          </div>
          {cuisine && <p className="text-sm text-muted-foreground mb-3">{cuisine}</p>}
          <div className="flex items-center gap-2">
            <PlatformBadge platform={bestPlatform.platform} />
            {bestPlatform.discount > 0 && (
              <span className="text-xs font-medium text-best-deal bg-best-deal/10 px-2 py-1 rounded-lg">
                ₹{bestPlatform.discount} OFF
              </span>
            )}
            {bestPlatform.delivery === 0 && (
              <span className="text-xs font-medium text-best-deal bg-best-deal/10 px-2 py-1 rounded-lg">
                Free Delivery
              </span>
            )}
          </div>
        </div>

        <div className="text-right shrink-0">
          <p className="font-heading font-bold text-3xl text-foreground">₹{bestPlatform.finalPrice}</p>
          {bestPlatform.basePrice !== bestPlatform.finalPrice && (
            <p className="text-sm text-muted-foreground line-through">₹{bestPlatform.basePrice + bestPlatform.delivery}</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
        <button
          onClick={() => window.open(bestPlatform.redirectUrl, "_blank")}
          className="flex-1 h-10 rounded-xl bg-primary text-primary-foreground font-heading font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all"
        >
          Order Now <ExternalLink className="h-3.5 w-3.5" />
        </button>
        <button
          onClick={() => onViewDetails(result)}
          className="h-10 px-4 rounded-xl border border-border text-foreground font-heading font-medium text-sm flex items-center gap-2 hover:bg-secondary transition-colors"
        >
          <Eye className="h-3.5 w-3.5" /> Details
        </button>
      </div>
    </div>
  );
};

export default RestaurantCard;
