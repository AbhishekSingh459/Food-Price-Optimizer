import RestaurantCard from "./RestaurantCard";

const ResultList = ({ results, query, onViewDetails }) => {
  if (results.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-5xl mb-4">🍽️</p>
        <h3 className="font-heading font-semibold text-lg text-foreground mb-1">No results found</h3>
        <p className="text-muted-foreground text-sm">
          We couldn't find "{query}" on any platform. Try a different search.
        </p>
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm text-muted-foreground mb-4">
        {results.length} result{results.length !== 1 ? "s" : ""} for "<span className="font-medium text-foreground">{query}</span>" — sorted by lowest price
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {results.map((r) => (
          <RestaurantCard key={r.id} result={r} onViewDetails={onViewDetails} />
        ))}
      </div>
    </div>
  );
};

export default ResultList;
