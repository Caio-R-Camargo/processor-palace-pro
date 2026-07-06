import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Cpu, Search } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { products, type Brand, type Product } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HardStore — Processadores Intel e AMD" },
      { name: "description", content: "Catálogo de estudo com processadores Intel e AMD, com busca, filtros e especificações detalhadas." },
      { property: "og:title", content: "HardStore — Processadores Intel e AMD" },
      { property: "og:description", content: "Catálogo de processadores Intel e AMD para testes de automação." },
    ],
  }),
  component: Index,
});

type Filter = "ALL" | Brand;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Index() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("ALL");
  const [selected, setSelected] = useState<Product | null>(null);
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchBrand = filter === "ALL" || p.brand === filter;
      const matchQuery = p.name.toLowerCase().includes(query.toLowerCase().trim());
      return matchBrand && matchQuery;
    });
  }, [query, filter]);

  function openProduct(p: Product) {
    setSelected(p);
    setEmail("");
    setEmailValid(false);
  }

  function handleValidateEmail() {
    if (!emailRegex.test(email.trim())) {
      setEmailValid(false);
      toast.error("E-mail inválido", { description: "Digite um endereço de e-mail válido." });
      return;
    }
    setEmailValid(true);
    toast.success("E-mail válido!", { description: "Agora você pode enviar sua inscrição." });
  }

  function handleSubscribe() {
    if (!emailValid) return;
    toast.success("Inscrição realizada!", {
      description: `Você receberá novidades de ${selected?.name} em ${email}.`,
    });
    setEmail("");
    setEmailValid(false);
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-4">
          <Cpu className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold tracking-tight">HardStore · Processadores</h1>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              data-testid="search-input"
              placeholder="Buscar processador..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[200px_1fr]">
          <aside data-testid="filter-sidebar" className="space-y-2">
            <p className="mb-2 text-sm font-semibold text-muted-foreground">Marca</p>
            {(["ALL", "INTEL", "AMD"] as Filter[]).map((f) => (
              <Button
                key={f}
                data-testid={`filter-${f.toLowerCase()}`}
                variant={filter === f ? "default" : "outline"}
                className="w-full justify-start"
                onClick={() => setFilter(f)}
              >
                {f === "ALL" ? "Todos" : f}
              </Button>
            ))}
          </aside>

          <section data-testid="product-list">
            {filtered.length === 0 ? (
              <p data-testid="empty-state" className="py-16 text-center text-muted-foreground">
                Nenhum produto encontrado.
              </p>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((p) => (
                  <button
                    key={p.id}
                    data-testid={`product-card-${p.id}`}
                    onClick={() => openProduct(p)}
                    className="group flex flex-col overflow-hidden rounded-lg border bg-card text-left transition-all hover:border-primary hover:shadow-lg"
                  >
                    <div className="flex aspect-square items-center justify-center bg-muted p-6">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="max-h-full max-w-full object-contain transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-2 p-4">
                      <Badge variant="secondary" className="w-fit">{p.brand}</Badge>
                      <h3 className="font-semibold leading-tight">{p.name}</h3>
                      <p className="mt-auto text-lg font-bold text-primary">{p.price}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent data-testid="product-modal" className="max-w-2xl">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle data-testid="modal-product-name">{selected.name}</DialogTitle>
                <DialogDescription>Especificações técnicas do processador.</DialogDescription>
              </DialogHeader>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex items-center justify-center rounded-lg bg-muted p-6">
                  <img src={selected.image} alt={selected.name} className="max-h-56 object-contain" />
                </div>

                <dl className="grid grid-cols-2 gap-3 text-sm">
                  <Spec label="Núcleos" value={selected.specs.cores} testid="spec-cores" />
                  <Spec label="Threads" value={selected.specs.threads} testid="spec-threads" />
                  <Spec label="Clock Base" value={selected.specs.baseClock} testid="spec-base" />
                  <Spec label="Clock Turbo" value={selected.specs.boostClock} testid="spec-boost" />
                  <Spec label="Cache" value={selected.specs.cache} testid="spec-cache" />
                  <Spec label="TDP" value={selected.specs.tdp} testid="spec-tdp" />
                  <Spec label="Socket" value={selected.specs.socket} testid="spec-socket" />
                  <Spec label="Litografia" value={selected.specs.lithography} testid="spec-litho" />
                </dl>
              </div>

              <div className="mt-4 space-y-3 rounded-lg border bg-muted/40 p-4">
                <p className="text-sm font-semibold">Receber novidades do produto por E-mail</p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Input
                    data-testid="email-input"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailValid(false);
                    }}
                  />
                  <Button
                    data-testid="validate-email-button"
                    variant="outline"
                    onClick={handleValidateEmail}
                  >
                    Validar
                  </Button>
                  <Button
                    data-testid="subscribe-button"
                    disabled={!emailValid}
                    onClick={handleSubscribe}
                  >
                    Enviar
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function Spec({ label, value, testid }: { label: string; value: string | number; testid: string }) {
  return (
    <div data-testid={testid} className="rounded-md border bg-card px-3 py-2">
      <dt className="text-xs text-muted-foreground">{label}</dt>
      <dd className="font-semibold">{value}</dd>
    </div>
  );
}
