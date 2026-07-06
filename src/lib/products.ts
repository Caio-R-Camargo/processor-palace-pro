import intelImg from "@/assets/intel-cpu.asset.json";
import amdImg from "@/assets/amd-cpu.asset.json";
import appleImg from "@/assets/apple-cpu.asset.json";

export type Brand = "INTEL" | "AMD" | "APPLE";

export interface Product {
  id: string;
  name: string;
  brand: Brand;
  image: string;
  specs: {
    cores: number;
    threads: number;
    baseClock: string;
    boostClock: string;
    cache: string;
    tdp: string;
    socket: string;
    lithography: string;
  };
  price: string;
}

const intel = intelImg.url;
const amd = amdImg.url;
const apple = appleImg.url;

export const products: Product[] = [
  { id: "i-1", name: "Intel Core Ultra 9 285K", brand: "INTEL", image: intel, price: "R$ 4.299", specs: { cores: 24, threads: 24, baseClock: "3.7 GHz", boostClock: "5.7 GHz", cache: "36 MB", tdp: "125 W", socket: "LGA 1851", lithography: "TSMC N3B" } },
  { id: "i-2", name: "Intel Core Ultra 7 265K", brand: "INTEL", image: intel, price: "R$ 3.199", specs: { cores: 20, threads: 20, baseClock: "3.9 GHz", boostClock: "5.5 GHz", cache: "30 MB", tdp: "125 W", socket: "LGA 1851", lithography: "TSMC N3B" } },
  { id: "i-3", name: "Intel Core Ultra 5 245K", brand: "INTEL", image: intel, price: "R$ 2.199", specs: { cores: 14, threads: 14, baseClock: "4.2 GHz", boostClock: "5.2 GHz", cache: "24 MB", tdp: "125 W", socket: "LGA 1851", lithography: "TSMC N3B" } },
  { id: "i-4", name: "Intel Core i9-14900K", brand: "INTEL", image: intel, price: "R$ 3.899", specs: { cores: 24, threads: 32, baseClock: "3.2 GHz", boostClock: "6.0 GHz", cache: "36 MB", tdp: "125 W", socket: "LGA 1700", lithography: "Intel 7" } },
  { id: "i-5", name: "Intel Core i7-14700K", brand: "INTEL", image: intel, price: "R$ 2.799", specs: { cores: 20, threads: 28, baseClock: "3.4 GHz", boostClock: "5.6 GHz", cache: "33 MB", tdp: "125 W", socket: "LGA 1700", lithography: "Intel 7" } },
  { id: "i-6", name: "Intel Core i5-14600K", brand: "INTEL", image: intel, price: "R$ 1.899", specs: { cores: 14, threads: 20, baseClock: "3.5 GHz", boostClock: "5.3 GHz", cache: "24 MB", tdp: "125 W", socket: "LGA 1700", lithography: "Intel 7" } },
  { id: "i-7", name: "Intel Core i5-13400F", brand: "INTEL", image: intel, price: "R$ 999", specs: { cores: 10, threads: 16, baseClock: "2.5 GHz", boostClock: "4.6 GHz", cache: "20 MB", tdp: "65 W", socket: "LGA 1700", lithography: "Intel 7" } },
  { id: "i-8", name: "Intel Core i3-14100F", brand: "INTEL", image: intel, price: "R$ 649", specs: { cores: 4, threads: 8, baseClock: "3.5 GHz", boostClock: "4.7 GHz", cache: "12 MB", tdp: "58 W", socket: "LGA 1700", lithography: "Intel 7" } },
  { id: "i-9", name: "Intel Core i9-13900K", brand: "INTEL", image: intel, price: "R$ 3.499", specs: { cores: 24, threads: 32, baseClock: "3.0 GHz", boostClock: "5.8 GHz", cache: "36 MB", tdp: "125 W", socket: "LGA 1700", lithography: "Intel 7" } },
  { id: "i-10", name: "Intel Core i7-13700F", brand: "INTEL", image: intel, price: "R$ 2.199", specs: { cores: 16, threads: 24, baseClock: "2.1 GHz", boostClock: "5.2 GHz", cache: "30 MB", tdp: "65 W", socket: "LGA 1700", lithography: "Intel 7" } },

  { id: "a-1", name: "AMD Ryzen 9 9950X", brand: "AMD", image: amd, price: "R$ 4.599", specs: { cores: 16, threads: 32, baseClock: "4.3 GHz", boostClock: "5.7 GHz", cache: "80 MB", tdp: "170 W", socket: "AM5", lithography: "TSMC 4nm" } },
  { id: "a-2", name: "AMD Ryzen 9 9900X", brand: "AMD", image: amd, price: "R$ 3.499", specs: { cores: 12, threads: 24, baseClock: "4.4 GHz", boostClock: "5.6 GHz", cache: "76 MB", tdp: "120 W", socket: "AM5", lithography: "TSMC 4nm" } },
  { id: "a-3", name: "AMD Ryzen 7 9800X3D", brand: "AMD", image: amd, price: "R$ 3.999", specs: { cores: 8, threads: 16, baseClock: "4.7 GHz", boostClock: "5.2 GHz", cache: "104 MB", tdp: "120 W", socket: "AM5", lithography: "TSMC 4nm" } },
  { id: "a-4", name: "AMD Ryzen 7 9700X", brand: "AMD", image: amd, price: "R$ 2.599", specs: { cores: 8, threads: 16, baseClock: "3.8 GHz", boostClock: "5.5 GHz", cache: "40 MB", tdp: "65 W", socket: "AM5", lithography: "TSMC 4nm" } },
  { id: "a-5", name: "AMD Ryzen 5 9600X", brand: "AMD", image: amd, price: "R$ 1.899", specs: { cores: 6, threads: 12, baseClock: "3.9 GHz", boostClock: "5.4 GHz", cache: "38 MB", tdp: "65 W", socket: "AM5", lithography: "TSMC 4nm" } },
  { id: "a-6", name: "AMD Ryzen 7 7800X3D", brand: "AMD", image: amd, price: "R$ 2.999", specs: { cores: 8, threads: 16, baseClock: "4.2 GHz", boostClock: "5.0 GHz", cache: "104 MB", tdp: "120 W", socket: "AM5", lithography: "TSMC 5nm" } },
  { id: "a-7", name: "AMD Ryzen 5 7600X", brand: "AMD", image: amd, price: "R$ 1.499", specs: { cores: 6, threads: 12, baseClock: "4.7 GHz", boostClock: "5.3 GHz", cache: "38 MB", tdp: "105 W", socket: "AM5", lithography: "TSMC 5nm" } },
  { id: "a-8", name: "AMD Ryzen 5 5600GT", brand: "AMD", image: amd, price: "R$ 799", specs: { cores: 6, threads: 12, baseClock: "3.6 GHz", boostClock: "4.6 GHz", cache: "19 MB", tdp: "65 W", socket: "AM4", lithography: "TSMC 7nm" } },
  { id: "a-9", name: "AMD Ryzen 7 5800X", brand: "AMD", image: amd, price: "R$ 1.199", specs: { cores: 8, threads: 16, baseClock: "3.8 GHz", boostClock: "4.7 GHz", cache: "36 MB", tdp: "105 W", socket: "AM4", lithography: "TSMC 7nm" } },
  { id: "a-10", name: "AMD Ryzen 5 5600X", brand: "AMD", image: amd, price: "R$ 749", specs: { cores: 6, threads: 12, baseClock: "3.7 GHz", boostClock: "4.6 GHz", cache: "35 MB", tdp: "65 W", socket: "AM4", lithography: "TSMC 7nm" } },
];
