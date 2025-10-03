interface UltrasoundMachine {
  manufacturer: string;
  model: string;
  modelNumber: string;
  imageUrl: string;
}

const ultrasoundMachines: UltrasoundMachine[] = [
  // GE Healthcare Products
  {
    manufacturer: "GE Healthcare",
    model: "Voluson E10",
    modelNumber: "VE10-PRO",
    imageUrl: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800"
  },
  {
    manufacturer: "GE Healthcare",
    model: "LOGIQ E10",
    modelNumber: "LE10-XDclear",
    imageUrl: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=800"
  },
  {
    manufacturer: "GE Healthcare",
    model: "Vivid E95",
    modelNumber: "VE95-Ultra",
    imageUrl: "https://images.unsplash.com/photo-1583912685341-9f34c4472de3?auto=format&fit=crop&w=800"
  },
  {
    manufacturer: "GE Healthcare",
    model: "Versana Premier",
    modelNumber: "VP-Advanced",
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800"
  },

  // Philips Products
  {
    manufacturer: "Philips",
    model: "EPIQ Elite",
    modelNumber: "EPIQ-E7C",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800"
  },
  {
    manufacturer: "Philips",
    model: "Affiniti 70",
    modelNumber: "AF70-G",
    imageUrl: "https://images.unsplash.com/photo-1583912685222-a941d28841e4?auto=format&fit=crop&w=800"
  },
  {
    manufacturer: "Philips",
    model: "ClearVue 850",
    modelNumber: "CV850",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800"
  },
  {
    manufacturer: "Philips",
    model: "Lumify",
    modelNumber: "L12-4",
    imageUrl: "https://images.unsplash.com/photo-1584017911833-9b2d18d8c45f?auto=format&fit=crop&w=800"
  },

  // Hitachi/Aloka Products
  {
    manufacturer: "Hitachi",
    model: "ARIETTA 850",
    modelNumber: "A850-SE",
    imageUrl: "https://images.unsplash.com/photo-1516069677018-378515003435?auto=format&fit=crop&w=800"
  },
  {
    manufacturer: "Hitachi",
    model: "ARIETTA 750",
    modelNumber: "A750-XE",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800"
  },
  {
    manufacturer: "Hitachi",
    model: "Noblus",
    modelNumber: "EUB-8500",
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800"
  },

  // Canon/Toshiba Products
  {
    manufacturer: "Canon",
    model: "Aplio i800",
    modelNumber: "TUS-AI800",
    imageUrl: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=800"
  },
  {
    manufacturer: "Canon",
    model: "Aplio a550",
    modelNumber: "TUS-A550",
    imageUrl: "https://images.unsplash.com/photo-1583912267550-d44e5b0e0a47?auto=format&fit=crop&w=800"
  },
  {
    manufacturer: "Canon",
    model: "Xario 200G",
    modelNumber: "TUS-X200G",
    imageUrl: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800"
  },

  // Samsung Products
  {
    manufacturer: "Samsung",
    model: "HERA W10",
    modelNumber: "HS70A",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800"
  },
  {
    manufacturer: "Samsung",
    model: "HERA I10",
    modelNumber: "HS60A",
    imageUrl: "https://images.unsplash.com/photo-1578496781197-b85385c7f0b3?auto=format&fit=crop&w=800"
  },
  {
    manufacturer: "Samsung",
    model: "RS85",
    modelNumber: "RS85A",
    imageUrl: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=800"
  },
  {
    manufacturer: "Samsung",
    model: "V8",
    modelNumber: "V8-PRO",
    imageUrl: "https://images.unsplash.com/photo-1583912687465-76ab342c2f82?auto=format&fit=crop&w=800"
  },
  {
    manufacturer: "Samsung",
    model: "HS40",
    modelNumber: "HS40-Advanced",
    imageUrl: "https://images.unsplash.com/photo-1583912687465-76ab342c2f82?auto=format&fit=crop&w=800"
  },
  {
    manufacturer: "Samsung",
    model: "PT60A",
    modelNumber: "PT60A-Premium",
    imageUrl: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800"
  },

  // Fujifilm Products
  {
    manufacturer: "Fujifilm",
    model: "Sonosite PX",
    modelNumber: "PX-ULT",
    imageUrl: "https://images.unsplash.com/photo-1583912685341-9f34c4472de3?auto=format&fit=crop&w=800"
  },
  {
    manufacturer: "Fujifilm",
    model: "Sonosite iViz",
    modelNumber: "iViz-PRO",
    imageUrl: "https://images.unsplash.com/photo-1584017911833-9b2d18d8c45f?auto=format&fit=crop&w=800"
  },
  {
    manufacturer: "Fujifilm",
    model: "Sonosite Edge II",
    modelNumber: "Edge-II",
    imageUrl: "https://images.unsplash.com/photo-1583912685222-a941d28841e4?auto=format&fit=crop&w=800"
  }
];

export default ultrasoundMachines;
