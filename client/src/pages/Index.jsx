import { useState } from "react";
import { Utensils } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import ResultList from "@/components/ResultList";
import DetailModal from "@/components/DetailModal";
import { searchFood } from "@/lib/api";

const Index = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSearch = async (q) => {
    setQuery(q);
    setIsLoading(true);
    setError("");
    try {
      const data = await searchFood(q);
      setResults(data);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <header className="pt-16 pb-10 px-4">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Utensils className="h-4 w-4" />
            <span className="font-heading font-semibold text-sm">Food Price Optimizer</span>
          </div>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl tracking-tight mb-3">
            Find the <span className="text-primary">cheapest</span> price
          </h1>
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            Compare food prices across Swiggy &amp; Zomato instantly. Save money on every order.
          </p>
        </div>
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />
      </header>

      <main className="max-w-3xl mx-auto px-4 pb-20">
        {isLoading && (
          <div className="flex flex-col items-center py-20">
            <div className="h-10 w-10 border-3 border-primary/20 border-t-primary rounded-full animate-spin mb-4" />
            <p className="text-muted-foreground text-sm">Comparing prices across platforms...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">⚠️</p>
            <p className="text-destructive font-medium">{error}</p>
          </div>
        )}

        {!isLoading && !error && results && (
          <ResultList results={results} query={query} onViewDetails={setSelectedItem} />
        )}

        {!isLoading && !error && !results && (
          <div className="text-center py-16 text-muted-foreground text-sm">
            <p className="text-4xl mb-3">🔍</p>
            Search for any dish to compare prices
          </div>
        )}
      </main>

      {selectedItem && <DetailModal result={selectedItem} onClose={() => setSelectedItem(null)} />}
    </div>
  );
};

export default Index;
