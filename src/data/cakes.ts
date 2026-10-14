import { CakeItem, Review } from '../types/cake';

export const CAKE_CATALOG: CakeItem[] = [
  {
    id: 'opera-pistache-framboise',
    name: 'Pistache & Framboise Sauvage',
    frenchSubtitle: 'Gâteau Velouté à la Pistache de Sicile',
    category: 'signature-gateaux',
    price: 88,
    description: 'Silky Sicilian bronte pistachio mousse, tart wild raspberry coulis, and almond dacquoise base with velvet finish.',
    longDescription: 'A pinnacle of contemporary French pastry craft. Layers of tender pistachio sponge soaked in delicate rose syrup, cushioned by slow-set white chocolate pistachio mousse and a tart insert of hand-picked wild raspberry gelee. Finished with our signature velvet cocoa butter spray and crowned with fresh organic raspberries.',
    servings: '8 - 10 guests',
    diameter: '8 inches (20 cm)',
    leadTime: '24 Hours notice',
    dietary: ['Vegetarian', 'Gelatin-Free', 'Halal-friendly'],
    flavorNotes: ['Sicilian Bronte Pistachio', 'Wild Alpine Raspberry', 'Rose Water', 'White Chocolate'],
    sponge: 'Almond & Bronte Pistachio Joconde',
    filling: 'Cold-pressed wild raspberry compote & pistachio diplomat',
    exterior: 'Pale jade velvet cocoa butter finish with crushed roasted pistachios',
    rating: 4.9,
    reviewsCount: 42,
    image: '/src/assets/images/product_pistachio_raspberry_cake_1791959347009.jpg',
    featured: true,
    bestseller: true
  },
  {
    id: 'grand-cru-valrhona-truffle',
    name: 'Valrhona Noir 70% & Fleur de Sel',
    frenchSubtitle: 'Truffé au Chocolat Guanaja & Caramel Doré',
    category: 'signature-gateaux',
    price: 94,
    description: 'Decadent Guanaja 70% dark chocolate mousse, smoked fleur de sel salted caramel, and crunchy hazelnut feuilletine.',
    longDescription: 'Created for intense chocolate purists. Four layers of Valrhona dark cocoa genoise alternated with silky whipped dark ganache and a crisp layer of caramelized hazelnut praline feuilletine. Glazed with a lustrous dark mirror ganache and brushed with 24-karat edible gold leaves.',
    servings: '10 - 12 guests',
    diameter: '8.5 inches (22 cm)',
    leadTime: '24 Hours notice',
    dietary: ['Vegetarian', 'Alcohol-Free'],
    flavorNotes: ['Valrhona Guanaja 70%', 'Fleur de Sel de Guérande', 'Piedmont Praline', 'Smoked Caramel'],
    sponge: 'Rich French dark cocoa biscuit imbibed with Bourbon vanilla syrup',
    filling: '70% dark chocolate whipped namelaka & salted caramel ribbon',
    exterior: 'Deep dark mirror drip glaze with chocolate ribbon curls & gold leaf',
    rating: 5.0,
    reviewsCount: 68,
    image: '/src/assets/images/product_valrhona_chocolate_cake_1791959349383.jpg',
    featured: true,
    bestseller: true
  },
  {
    id: 'botanical-meadow-wedding-tier',
    name: 'The Meadow Reverie Tiered Cake',
    frenchSubtitle: 'Pièce Montée Botanique & Fleurs Pressées',
    category: 'wedding-tiered',
    price: 360,
    description: 'Four-tier celebratory statement piece frosted in textured ivory buttercream and adorned with organically pressed edible wildflowers.',
    longDescription: 'Our flagship celebration masterpiece. Designed for dream weddings and milestone galas. Hand-crafted with alternating tiers of Tahitian vanilla bean sponge and Earl Grey lavender sponge, layered with champagne buttercream and poached pear coulis. Each tier is meticulously smoothed and decorated by hand with pressed edible English meadow florals and flecks of pure gold leaf.',
    servings: '45 - 60 guests',
    diameter: 'Multi-tier: 6", 8", 10", 12"',
    leadTime: '7 Days notice',
    dietary: ['Vegetarian', 'Organic dairy'],
    flavorNotes: ['Tahitian Vanilla Pods', 'Pressed Wild Chamomile', 'Champagne Buttercream', 'Poached Pear'],
    sponge: 'Tahitian vanilla bean and Bergamot chiffon',
    filling: 'French champagne reduction buttercream with poached pear compote',
    exterior: 'Textured natural limestone buttercream with pressed edible florals',
    rating: 5.0,
    reviewsCount: 31,
    image: '/src/assets/images/hero_artisanal_tiered_cake_1791959346272.jpg',
    featured: true,
    bestseller: true
  },
  {
    id: 'earl-grey-lavender-vintage',
    name: 'Earl Grey Lavender Vintage Lambeth',
    frenchSubtitle: 'Gâteau d’Antan aux Volants & Lavande Bio',
    category: 'vintage-piped',
    price: 115,
    description: 'Timeless vintage scalloped shell piping with fragrant organic bergamot tea sponge and lavender-infused Swiss meringue buttercream.',
    longDescription: 'Inspired by 19th-century royal French Lambeth piping techniques, elevated with modern botanical sophistication. Infused with organic Ceylon Earl Grey and delicate dried Provence lavender. Tender, light-as-air sponge layers enveloped in exquisite multi-layered scalloped swags and dainty pearl beadings.',
    servings: '12 - 16 guests',
    diameter: '7 inches tall-profile (18 cm)',
    leadTime: '48 Hours notice',
    dietary: ['Vegetarian', 'Nut-Free option'],
    flavorNotes: ['Ceylon Bergamot Tea', 'Provence Lavender', 'Swiss Meringue', 'Wildflower Honey'],
    sponge: 'Cold-steeped organic Earl Grey tea infusion sponge',
    filling: 'Lavender blossom honey buttercream & lemon curd swirl',
    exterior: 'Hand-piped Lambeth rococo swags in antique ivory and subtle mauve',
    rating: 4.8,
    reviewsCount: 54,
    image: '/src/assets/images/product_earl_grey_lavender_cake_1791959350057.jpg',
    featured: true,
    bestseller: false
  },
  {
    id: 'noisette-caramel-beurre-sale',
    name: 'Praliné Noisette & Caramel Salé',
    frenchSubtitle: 'Gâteau Croquant aux Noisettes & Macarons',
    category: 'signature-gateaux',
    price: 92,
    description: 'Slow-roasted Piedmont hazelnut sponge, salted butter caramel drippings, caramelized hazelnut brittle, and crisp French macarons.',
    longDescription: 'An indulgent harmony of roasted nut aromas and warm toffee sweetness. Baked with whole ground Piedmont hazelnuts and layered with whipped brown butter frosting and sea salt caramel. Topped with handcrafted vanilla macarons, amber sugar shards, and roasted golden hazelnuts.',
    servings: '8 - 12 guests',
    diameter: '8 inches (20 cm)',
    leadTime: '24 Hours notice',
    dietary: ['Vegetarian'],
    flavorNotes: ['Piedmont Roasted Hazelnut', 'Salted Butter Caramel', 'Brown Butter', 'Tahitian Vanilla Macaron'],
    sponge: 'Toasted Piedmont hazelnut financier biscuit',
    filling: 'Salted butter caramel and light hazelnut praline diplomat',
    exterior: 'Semi-naked hazelnut cream with amber caramel drip and vanilla macarons',
    rating: 4.9,
    reviewsCount: 39,
    image: '/src/assets/images/product_caramel_hazelnut_gateau_1791959349923.jpg',
    featured: true,
    bestseller: false
  }
];

export const BESPOKE_TIER_OPTIONS = [
  {
    id: 'single',
    title: 'Single Tier (6" or 8")',
    servings: 'Serves 8 - 12 guests',
    basePrice: 85,
    description: 'Ideal for intimate dinner celebrations, birthdays & romantic anniversaries.'
  },
  {
    id: 'two-tier',
    title: 'Two Tiers (6" + 8")',
    servings: 'Serves 20 - 28 guests',
    basePrice: 175,
    description: 'Classic dual-elevation design. Perfect for baby showers, engagements & party centerpieces.'
  },
  {
    id: 'three-tier',
    title: 'Three Tiers (6" + 8" + 10")',
    servings: 'Serves 45 - 60 guests',
    basePrice: 320,
    description: 'Architectural grand celebration showpiece for luxury weddings & black-tie galas.'
  }
];

export const SPONGE_FLAVORS = [
  { id: 'madagascar-vanilla', name: 'Madagascar Bourbon Vanilla', desc: 'Aged vanilla beans infused in light sponge', priceAdd: 0 },
  { id: 'valrhona-cocoa', name: 'Valrhona Guanaja 70% Cocoa', desc: 'Deep, rich French dark chocolate biscuit', priceAdd: 8 },
  { id: 'sicilian-pistachio', name: 'Sicilian Bronte Pistachio (+ $12)', desc: 'Ground roasted green pistachios & almond', priceAdd: 12 },
  { id: 'earl-grey-lavender', name: 'Ceylon Earl Grey & Lavender', desc: 'Bergamot-steeped delicate chiffon cake', priceAdd: 6 },
  { id: 'lemon-elderflower', name: 'Amalfi Lemon & Elderflower', desc: 'Zesty citrus sponge with fragrant botanical syrup', priceAdd: 6 }
];

export const FILLING_FLAVORS = [
  { id: 'salted-caramel-praline', name: 'Salted Caramel & Hazelnut Praline', desc: 'Sea salt butter toffee with praline crisp' },
  { id: 'raspberry-rose-coulis', name: 'Wild Raspberry & Rose Compote', desc: 'Tart berry insert with velvet mascarpone' },
  { id: 'passionfruit-mango-curd', name: 'Tropical Passionfruit & Mango Curd', desc: 'Bright, refreshing exotic curd with white chocolate' },
  { id: 'bourbon-vanilla-diplomat', name: 'Tahitian Vanilla Bean Diplomat Cream', desc: 'Light, silky aerated pastry cream with real bean caviar' },
  { id: 'dark-chocolate-namelaka', name: 'Valrhona 70% Whipped Ganache', desc: 'Velvety, unctuous dark chocolate cream' }
];

export const FINISH_STYLES = [
  { id: 'smooth-velvet', name: 'Smooth Velvet Ivory', desc: 'Flawless minimalist matte surface' },
  { id: 'vintage-lambeth', name: 'Vintage Lambeth Scallop Piping', desc: 'Intricate royal Victorian borders & swags' },
  { id: 'semi-naked-rustic', name: 'Semi-Naked Textured Buttercream', desc: 'Soft peek of golden sponge with natural texture' },
  { id: 'concrete-limestone', name: 'Architectural Stone & Gold Flecks', desc: 'Organic stone-like texture with 24k gold flecks' }
];

export const COLOR_TONES = [
  { id: 'porcelain-cream', name: 'Porcelain & Warm Vanilla', hex: '#FAF5EE' },
  { id: 'sage-pistachio', name: 'Pale Sage Pistachio', hex: '#E2E8DC' },
  { id: 'blush-apricot', name: 'Dusty Rose & Peach', hex: '#F5E4E0' },
  { id: 'deep-espresso', name: 'Midnight Truffle & Cocoa', hex: '#342B28' },
  { id: 'soft-lavender', name: 'Provence Lavender Mist', hex: '#EBE5F0' }
];

export const BOTANICAL_ACCENTS = [
  { id: 'pressed-florals', name: 'Pressed Edible Meadow Flowers', priceAdd: 18, desc: 'Organic viola, chamomile & cornflower blossoms' },
  { id: 'gold-leaf-ribbon', name: '24K Edible Gold Leaf Brushed Accent', priceAdd: 22, desc: 'Lustrous flecks of genuine edible gold leaf' },
  { id: 'macarons-berries', name: 'Fresh Raspberries & Handmade Macarons', priceAdd: 24, desc: 'Trio of vanilla macarons & fresh berries' },
  { id: 'minimalist-pure', name: 'Minimalist Architectural (No Florals)', priceAdd: 0, desc: 'Clean, sculptural geometric silhouette' }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Camille & Antoine de Varenne',
    role: 'Wedding at Château de Chambord',
    event: 'The Meadow Reverie Wedding Tier',
    rating: 5,
    date: 'October 2026',
    content: 'Our four-tiered wedding cake from Atelier Velouté was an ethereal work of art. The guests were stunned by the delicate pressed meadow flowers, and the flavor of the Tahitian vanilla and poached pear was unmatched.',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Elena Rostova',
    role: 'Executive Director, Haute Maison Magazine',
    event: 'Pistache & Framboise Sauvage',
    rating: 5,
    date: 'September 2026',
    content: 'The texture is astonishingly refined. The balance of Sicilian pistachio diplomat with sharp wild raspberry creates pure culinary poetry. Delivered in pristine temperature-shielded packaging.',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Marcella & Liam Vance',
    role: '30th Anniversary Celebration',
    event: 'Valrhona Noir 70% & Fleur de Sel',
    rating: 5,
    date: 'August 2026',
    content: 'We used the Bespoke Cake Studio to design a custom chocolate and salted caramel centerpiece for 50 people. The inscription in Spencerian calligraphy on the sugar plaque brought tears of joy.',
    verified: true
  }
];

export const TASTING_NOTES = [
  {
    name: 'Bronte Pistachio (Sicily)',
    origin: 'Mount Etna Volcanic Slopes',
    aroma: 'Sweet, buttery, roasted green pine, emerald color',
    pairing: 'Wild Raspberry, White Chocolate, Cardamom'
  },
  {
    name: 'Valrhona Guanaja 70%',
    origin: 'Cuvée of Rare South American Trinitario Beans',
    aroma: 'Deep bitterness, tobacco, warm wood, roasted cocoa nibs',
    pairing: 'Smoked Sea Salt, Piedmont Hazelnuts, Bourbon Vanilla'
  },
  {
    name: 'Tahitian Vanilla Pompona',
    origin: 'Raiatea Island (French Polynesia)',
    aroma: 'Floral, anise, caramel, extraordinarily plump caviar',
    pairing: 'Poached Stone Fruit, Sweet Cream, Champagne'
  },
  {
    name: 'Provence Lavender Blossom',
    origin: 'Plateau de Valensole, High Provence',
    aroma: 'Gentle herbal floral sweetness, sun-dried soothing notes',
    pairing: 'Ceylon Earl Grey, Meyer Lemon, Clover Honey'
  }
];
