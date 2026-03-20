import './EmptyState.css';

export type EmptyStateType =
  | 'alert' | 'calendar' | 'chart' | 'connection'
  | 'database' | 'documents' | 'email' | 'forms'
  | 'permissions' | 'privacy';

export type EmptyStateSize = 'lg' | 'md' | 'sm';

interface EmptyStateProps {
  property1?: EmptyStateType;
  size?: EmptyStateSize;
  title?: string;
  description?: string;
  hasButton?: boolean;
  showTitle?: boolean;
  showDescription?: boolean;
  buttonLabel?: string;
  onButtonClick?: () => void;
  className?: string;
}

// ── Illustration asset base ────────────────────────────────────────────────
const BASE = 'http://localhost:3845/assets/';
const a = (h: string) => `${BASE}${h}.svg`;

// ── Illustration heights (lg, in px) ──────────────────────────────────────
const LG_HEIGHTS: Record<EmptyStateType, number> = {
  chart:       292.467,
  alert:       301.614,
  connection:  286.081,
  database:    248.706,
  documents:   300.972,
  forms:       329.032,
  email:       285.939,
  permissions: 297.648,
  privacy:     276.204,
  calendar:    282.370,
};

const SCALE: Record<EmptyStateSize, number> = {
  lg: 1,
  md: 0.75,
  sm: 128 / 352,
};

// ── Low-level illustration parts ──────────────────────────────────────────
/** Absolutely-positioned image part */
function P({ src, inset }: { src: string; inset: string }) {
  return (
    <div style={{ position: 'absolute', inset }}>
      <img alt="" src={src} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block', maxWidth: 'none' }} />
    </div>
  );
}

/** Rotated image part (Figma flex-rotate pattern) */
function RP({ src, ci, rot, rw, rh }: { src: string; ci: string; rot: number; rw: number; rh: number }) {
  return (
    <div style={{ position: 'absolute', inset: ci, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ flexShrink: 0, width: rw, height: rh, transform: `rotate(${rot}deg)`, position: 'relative' }}>
        <img alt="" src={src} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block', maxWidth: 'none' }} />
      </div>
    </div>
  );
}

// ── Illustration compositions ──────────────────────────────────────────────
function IllusChart() {
  return <>
    <P src={a('dbecf964420a0148cdaa7e589817705f3b5b679e')} inset="10.52% 0 18.42% 0" />
    <P src={a('b1c4995fa8f90e5de24596c08ce83aa91aec1639')} inset="0 9.13% 27.61% 9.82%" />
    <P src={a('8af9986aecaafd27c63721e1811963afd488b6a6')} inset="65.4% 14.45% 34.1% 12.62%" />
    <P src={a('8af9986aecaafd27c63721e1811963afd488b6a6')} inset="53.95% 14.45% 45.55% 12.62%" />
    <P src={a('8af9986aecaafd27c63721e1811963afd488b6a6')} inset="42.51% 14.45% 56.99% 12.62%" />
    <P src={a('8af9986aecaafd27c63721e1811963afd488b6a6')} inset="31.06% 14.45% 68.44% 12.62%" />
    <P src={a('8af9986aecaafd27c63721e1811963afd488b6a6')} inset="19.61% 14.45% 79.89% 12.62%" />
    <P src={a('8af9986aecaafd27c63721e1811963afd488b6a6')} inset="8.16% 14.45% 91.34% 12.62%" />
    <P src={a('210a363ff4c97515b3f495ed982330dd00cb5cd9')} inset="15.87% 70.88% 33.74% 20.16%" />
    <P src={a('d1b8066037749163717cb45c7ee34dc5ccb6ccb2')} inset="35.52% 53.74% 33.74% 37.3%" />
    <P src={a('8591f3df71134f905a0973dcaffad7e83c610a98')} inset="21.14% 36.61% 33.75% 54.44%" />
    <P src={a('34b0e572212d82e5a4dd3bc1146b7b47bb56dcd1')} inset="42.56% 19.48% 33.75% 71.57%" />
    <P src={a('2ad7dd636edb4a5659438383a1ecd2135435394e')} inset="35.62% 18.38% 44.19% 20.36%" />
    <P src={a('07409463f12396d7796015508b75cba795abfafa')} inset="95.34% 15.31% 0 22.43%" />
  </>;
}

function IllusAlert() {
  return <>
    <P src={a('25e94b5a8431897b20012a53d4b32d6f2b19d415')} inset="13.22% 0 17.87% 0" />
    <P src={a('4c86f825594ead7d99f74cfb7e4404fc36a2a1eb')} inset="59.63% 37.84% 18.03% 43.02%" />
    <RP src={a('ffcc6e23d7ee1300904b768641cb5e4e8061b5c5')} ci="0 50.84% 85.19% 38.65%" rot={-12.57} rw={29.131} rh={39.279} />
    <P src={a('849c9ea9a952acc582b5b6b0c39d2dca0fd20e83')} inset="6.47% 18.18% 23.32% 27.84%" />
    <P src={a('19f632ed3d764d8bd361773b464d8208b9288d64')} inset="95.47% 18.53% 0 19.22%" />
    <P src={a('72147777a1eccef41692148eee3f235ea771267a')} inset="8.24% 19.92% 63.62% 60.63%" />
    <P src={a('eba574a75a1e0bb312733448a729c6f95157b877')} inset="18.45% 32.82% 79.25% 65.21%" />
    <P src={a('055954903fd0b7f554baeab8d7b07d7a905f0ee4')} inset="18.45% 28.66% 79.25% 69.37%" />
    <P src={a('055954903fd0b7f554baeab8d7b07d7a905f0ee4')} inset="18.45% 24.51% 79.25% 73.52%" />
  </>;
}

function IllusConnection() {
  return <>
    <P src={a('07e0d8294003fdaec736f0e907bf298b3a49a9e2')} inset="8.52% 0 18.83% 0" />
    <P src={a('fb62a38602f06981ddd2c38b0e52c7510fee149f')} inset="95.23% 15.31% 0 22.43%" />
    <P src={a('0382c410c2f0ebc27758759224575e581863e7f3')} inset="31.4% 59.26% 41.07% 37.51%" />
    <RP src={a('5d3cc60b2af797223b679fb9dd638a3f1e4841e0')} ci="20.93% 42.31% 63.09% 37.44%" rot={-118.45} rw={11.391} rh={74.896} />
    <P src={a('7ff6c8453b58876629604f9a5262a1694c385ccf')} inset="56.54% 49.06% 30.88% 26.95%" />
    <P src={a('e09bc684b141b9affaa7078a2fde0ad7888acb6a')} inset="69.25% 45.79% 30.75% 23.68%" />
    <P src={a('5298ce060934f259ace50ac270ddd6683f942b08')} inset="27.72% 55.06% 58.46% 33.71%" />
    <P src={a('e0e1cb7876212ff8f75abfad658327d9cd79e739')} inset="0 11.67% 38.47% 52.64%" />
    <P src={a('bb6d506f922be90b78127193b45ed39481403910')} inset="0.67% 8.62% 36.73% 64.89%" />
    <P src={a('ab0117ad50eb2138227b9fa19180add0ac7946d1')} inset="26.8% 3.97% 60.77% 69.07%" />
    <P src={a('0a4e37fcad2aca54c86f8874d3f824b81446ea18')} inset="33.47% 2.01% 57.42% 90.59%" />
  </>;
}

function IllusDatabase() {
  return <>
    <P src={a('4b9d24417f1c9ea734f7cd6dd4cf45e519f8e195')} inset="9.19% 13.7% 18.7% 0" />
    <P src={a('a89f3a3a5d45ef345bd2af3f1a2885417217248f')} inset="95.28% 27.49% 0 18.78%" />
    <P src={a('cf5e0af420c9680079153922ff6b1b4652ae1157')} inset="0.92% 32.37% 23.02% 16.29%" />
    <P src={a('ff98f233308948f80133474afbda60197df1f7e5')} inset="32.94% 32.55% 22.39% 27.22%" />
    <P src={a('227ed9572ffc727990d7b8f74bbe96ae68f76d16')} inset="0.92% 75.05% 86.69% 16.29%" />
    <P src={a('835e1ce333d9ab6754697a29dad818dd74e22000')} inset="18.67% 29.94% 61.34% 24.66%" />
    <P src={a('d022703f7f512fe5acddd37e72dd2b1b28849fbe')} inset="25.23% 65.17% 67.85% 29.94%" />
    <P src={a('72cd33278ab735efc1b8e85f08addfc257c66e82')} inset="25.23% 57.48% 67.85% 37.63%" />
    <P src={a('72cd33278ab735efc1b8e85f08addfc257c66e82')} inset="25.23% 49.8% 67.85% 45.31%" />
    <P src={a('9c4621a547aa5897445412f726416f1f9c684cd6')} inset="40.82% 29.94% 39.19% 24.66%" />
    <P src={a('805fa6a2bb21f390d5c134957253d4b7042585a6')} inset="47.39% 65.17% 45.69% 29.94%" />
    <P src={a('b7ca15887cba68cc7c01f76c5fb69c25256ddaf1')} inset="47.39% 57.48% 45.69% 37.63%" />
    <P src={a('b7ca15887cba68cc7c01f76c5fb69c25256ddaf1')} inset="47.39% 49.8% 45.69% 45.31%" />
    <P src={a('06b159832daa88d0e03e10cea603944de3e80af6')} inset="62.98% 29.94% 17.03% 24.66%" />
    <P src={a('113268653ebbadd94c03b457abf7ff33c2341dc5')} inset="69.54% 65.17% 23.54% 29.94%" />
    <P src={a('113268653ebbadd94c03b457abf7ff33c2341dc5')} inset="69.54% 57.48% 23.54% 37.63%" />
    <P src={a('113268653ebbadd94c03b457abf7ff33c2341dc5')} inset="69.54% 49.8% 23.54% 45.31%" />
    <P src={a('e4d9a28958842fe4968e96415d33745226bead0e')} inset="0 0 37.08% 54.96%" />
  </>;
}

function IllusDocuments() {
  return <>
    <P src={a('c7366bafbb907418e1faac88ba4994e66da6f6ed')} inset="5.15% 74.14% 90.59% 25.86%" />
    <P src={a('a58c08aa79d478f8c43860152261e0f1b4968d12')} inset="7.28% 72.31% 92.72% 24.03%" />
    <P src={a('801a9323a35f1dd36ef71c8af4776e49ec495ea8')} inset="13.03% 0 17.91% 0" />
    <P src={a('ba0d76ccc289e7fab8d28a44a8d188b4ad3e9207')} inset="75.01% 87.29% 20.73% 12.71%" />
    <P src={a('f0a483a410d8da8747e249159e2316f58f4581f5')} inset="77.14% 85.47% 22.86% 10.89%" />
    <P src={a('ff99f30e17f009ac5e508170b2303ea17d7e0da4')} inset="95.46% 18.53% 0 19.21%" />
    <P src={a('54eabfae85f14acccc983845b4ca6a649d66066b')} inset="18.83% 15.29% 26.6% 19.12%" />
    <RP src={a('2cc4a1865d8381503846c44a2c8aa3bcfb625d3d')} ci="0 22.27% 51.08% 30.77%" rot={24.06} rw={136.162} rh={100.465} />
    <P src={a('d7d04d03a6d588151be869315cdd10de8f745598')} inset="22.95% 22.4% 26.62% 18.62%" />
    <P src={a('a4d0e9f3cb765a06fd340e5627c4942c7628d8cd')} inset="65.91% 17.76% 29.18% 78.04%" />
    <P src={a('a210b9dcc2bc8b49e066af6c02c53cffdf45d636')} inset="34.06% 3.62% 13.51% 51.02%" />
  </>;
}

function IllusForms() {
  return <>
    <P src={a('6ec37d47bfd562712023c55a0f2098b508d11e4b')} inset="20.46% 0 16.38% 0" />
    <P src={a('9409b7dd097998cbe024f5f661c26cf301b8a59e')} inset="95.85% 18.87% 0 18.88%" />
    <RP src={a('352874f0d767079bbf0bf80bcd60e25a921c1df9')} ci="5.46% 19.92% 16.32% 20.69%" rot={-5.93} rw={185.29} rh={239.492} />
    <RP src={a('f8d1ee6a8674117ce1e654b119a80bf7a8c4a5ad')} ci="8.61% 22.63% 20.22% 23.33%" rot={-5.93} rw={168.605} rh={217.943} />
    <P src={a('76e7e91ac7bb24007db07b038d0fc57281a2c82d')} inset="0 38.55% 84.01% 32.59%" />
  </>;
}

function IllusEmail() {
  return <>
    <P src={a('40d2512ccc12582fa553e5e71a913e425f42c158')} inset="8.46% 0 18.85% 0" />
    <P src={a('fdb7bddeaf036f2449231d574bd535bb12b4b2c5')} inset="7.71% 20.25% 22.61% 23.34%" />
    <RP src={a('3093aaca7b5071e4db08a8acaa28eecba59c5450')} ci="0 21.77% 38.03% 22.53%" rot={-15.21} rw={165.501} rh={138.638} />
    <P src={a('88252f6ad593646e95ce42fa6248d596f551f2c7')} inset="31.92% 20.25% 22.33% 23.34%" />
    <P src={a('c90bef647de5e31de0404545ca3e0f1a238c2f05')} inset="45.42% 20.25% 22.33% 23.34%" />
    <P src={a('1b180d67a30f7fcda83962baff139b1ebc720671')} inset="95.22% 18.53% 0 19.22%" />
  </>;
}

function IllusPermissions() {
  return <>
    <P src={a('3a8a934575624bbf99289345bb34fbe2eed9f030')} inset="62.95% 20.79% 35.09% 77.55%" />
    <P src={a('8bf673e572d807266225bd156e5e7400f5fa5426')} inset="12.07% 0 18.1% 0" />
    <P src={a('53ccf1a63e99698e2174640cdd3eb2804fe845e3')} inset="95.41% 18.87% 0 18.88%" />
    <RP src={a('871623c309a652bf884713a91db6ba1a9314a035')} ci="9.39% 12.1% 21.57% 12.09%" rot={5.06} rw={251.619} rh={184.019} />
    <RP src={a('54804600bd3bacc22202450c4691bdf0bb4d9958')} ci="32.11% 29.51% 57.11% 30.47%" rot={5.06} rw={139.664} rh={19.863} />
    <RP src={a('54e399afe180aae9958fa31a6f7a57dba66ce8b6')} ci="31.84% 29.28% 56.84% 30.25%" rot={5.06} rw={141.131} rh={21.33} />
    <RP src={a('7e499beb71425fdc31555bf007d4b66eeaf7bd08')} ci="45.06% 30.48% 44.16% 29.5%" rot={5.06} rw={139.664} rh={19.863} />
    <RP src={a('0f4d1313abf72a0eb949dfa7ec2996ab62e30358')} ci="44.79% 30.25% 43.89% 29.27%" rot={5.06} rw={141.131} rh={21.33} />
    <RP src={a('e569744a2cf9fd0e4ed2fef6d741b21327f7c6ab')} ci="59.54% 43.85% 32.27% 40.91%" rot={5.06} rw={52.103} rh={19.863} />
    <P src={a('abc5bb1f3b3d99153ee068c159d3a65263511043')} inset="0 39.19% 74.45% 39.2%" />
    <P src={a('6560eebabf231be020ce2221baeecec2d76615a2')} inset="12.03% 41.77% 74.46% 41.85%" />
    <P src={a('332d07e23db021b3aec96a9dd3db8e6c7d151c6f')} inset="1.71% 46.45% 89.91% 46.46%" />
    <P src={a('f0f4ad0004f7570fd63c773fecb437a87babd3a0')} inset="34.59% 57.65% 61.61% 39.14%" />
    <P src={a('f0f4ad0004f7570fd63c773fecb437a87babd3a0')} inset="35.26% 51.16% 60.94% 45.63%" />
    <P src={a('1ecb8e034e3b6e5268901ab2f8b17983808afa16')} inset="35.95% 44.67% 60.26% 52.12%" />
    <P src={a('e392bcb6df2ed467543eeaf08dc8c3cfe671edcb')} inset="36.62% 38.18% 59.59% 58.61%" />
  </>;
}

function IllusPrivacy() {
  return <>
    <P src={a('294e3e04e1d4de00710e0b2229bd1970405d41cf')} inset="5.25% 0 19.51% 0" />
    <RP src={a('fefe98189312919ff73852090088819294226e17')} ci="21.26% 7.59% 20% 9.61%" rot={-9.91} rw={275.52} rh={116.551} />
    <RP src={a('bbec2ff3e16f7d09de7a0da934007fc779363ccd')} ci="21.25% 12.15% 53.51% 9.61%" rot={-9.91} rw={275.643} rh={22.588} />
    <RP src={a('fb220529143f0c4828a2f0a721ede32b890a3188')} ci="28.31% 41.62% 44.4% 41.27%" rot={-9.91} rw={49.28} rh={67.928} />
    <RP src={a('b6371d923c5d6ec986d8966adda79b92870b954f')} ci="0 13.25% 61.56% 6.7%" rot={-9.91} rw={275.618} rh={59.622} />
    <P src={a('346f3a373fa65fbc7330193c760b543ef910ea3e')} inset="34.56% 47.7% 52.21% 46.21%" />
    <P src={a('573491c817a318a344d8865bb5e3f56081dd6a27')} inset="95.06% 18.87% 0 18.88%" />
  </>;
}

function IllusCalendar() {
  const c12 = a('c52c922dd6fc3395c57ad2ad3f3dc0d4b175cca4');
  const c11 = a('d96bff6664dc5ad00c3402f32e32d810a6072e67');
  const c13 = a('72beec1d4cd3f3be3890360316cc5ae251b1ebc6');
  const c14 = a('39dac286252d98eccfd0633594154643ecd31ac3');
  return <>
    <P src={a('bbfd28cb2269ff454a0313deb66d5872c1f0b9c7')} inset="7.31% 0 19.09% 0" />
    <P src={a('d3a651dfce3703cb48156959f92b18101f3c06bc')} inset="95.16% 18.87% 0 18.88%" />
    <P src={a('a6082becf9af32c32f66919096b615666501ddb4')} inset="7.12% 11.76% 24.92% 11.76%" />
    {/* Row 1 */}
    <P src={c11} inset="36.47% 75.39% 54.77% 16.8%" />
    <P src={c12} inset="36.47% 66.02% 54.77% 26.17%" />
    <P src={c12} inset="36.47% 56.64% 54.77% 35.55%" />
    <P src={c12} inset="36.47% 47.27% 54.77% 44.92%" />
    <P src={c12} inset="36.47% 37.89% 54.77% 54.3%" />
    <P src={c13} inset="36.47% 28.91% 54.77% 63.67%" />
    <P src={c14} inset="36.47% 19.92% 54.77% 72.66%" />
    {/* Row 1b (top rows with same items) */}
    <P src={c11} inset="24.35% 75.39% 66.89% 16.8%" />
    <P src={c12} inset="24.35% 66.02% 66.89% 26.17%" />
    <P src={c12} inset="24.35% 56.64% 66.89% 35.55%" />
    <P src={c12} inset="24.35% 47.27% 66.89% 44.92%" />
    <P src={c12} inset="24.35% 37.89% 66.89% 54.3%" />
    <P src={c13} inset="24.35% 28.91% 66.89% 63.67%" />
    <P src={c14} inset="24.35% 19.92% 66.89% 72.66%" />
    {/* Row 2 */}
    <P src={c11} inset="48.64% 75.39% 42.59% 16.8%" />
    <P src={c12} inset="48.64% 66.02% 42.59% 26.17%" />
    <P src={c12} inset="48.64% 56.64% 42.59% 35.55%" />
    <P src={c12} inset="48.64% 47.27% 42.59% 44.92%" />
    <P src={c12} inset="48.64% 37.89% 42.59% 54.3%" />
    <P src={c13} inset="48.64% 28.91% 42.59% 63.67%" />
    <P src={c14} inset="48.64% 19.92% 42.59% 72.66%" />
    {/* Row 3 */}
    <P src={c11} inset="60.81% 75.39% 30.42% 16.8%" />
    <P src={c12} inset="60.81% 66.02% 30.42% 26.17%" />
    <P src={c12} inset="60.81% 56.64% 30.42% 35.55%" />
    <P src={c12} inset="60.81% 47.27% 30.42% 44.92%" />
    <P src={c12} inset="60.81% 37.89% 30.42% 54.3%" />
    {/* Header row & dividers */}
    <P src={a('9856316ee8ac3208c2cbef6df3d7c0fe452b176c')} inset="7.17% 11.76% 81.34% 11.76%" />
    <P src={a('56d9ae01d6fb4255f8c126c940fea8861947a953')} inset="0 65.05% 86.32% 34.53%" />
    <P src={a('56d9ae01d6fb4255f8c126c940fea8861947a953')} inset="0 34.53% 86.32% 65.06%" />
  </>;
}

const ILLUSTRATIONS: Record<EmptyStateType, () => JSX.Element> = {
  chart:       IllusChart,
  alert:       IllusAlert,
  connection:  IllusConnection,
  database:    IllusDatabase,
  documents:   IllusDocuments,
  forms:       IllusForms,
  email:       IllusEmail,
  permissions: IllusPermissions,
  privacy:     IllusPrivacy,
  calendar:    IllusCalendar,
};

// ── Plus icon for button ───────────────────────────────────────────────────
const PlusIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// ── Main component ─────────────────────────────────────────────────────────
export function EmptyState({
  property1 = 'chart',
  size = 'lg',
  title = 'Title',
  description = 'This is a descriptive text',
  hasButton = true,
  showTitle = true,
  showDescription = true,
  buttonLabel = 'Button label',
  onButtonClick,
  className,
}: EmptyStateProps) {
  const lgH = LG_HEIGHTS[property1];
  const scale = SCALE[size];
  const scaledW = Math.round(352 * scale);
  const scaledH = Math.round(lgH * scale);

  const IllusComponent = ILLUSTRATIONS[property1];

  const classes = ['empty-state', `empty-state-${size}`, className ?? ''].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {/* Illustration */}
      <div className="empty-state-illus-wrapper">
        <div style={{ width: scaledW, height: scaledH, flexShrink: 0 }}>
          <div style={{ position: 'relative', width: 352, height: lgH, transform: `scale(${scale})`, transformOrigin: 'top left' }}>
            <IllusComponent />
          </div>
        </div>
      </div>

      {/* Text content */}
      <div className="empty-state-content">
        {showTitle && <p className="empty-state-title">{title}</p>}
        {showDescription && <p className="empty-state-description">{description}</p>}
      </div>

      {/* Button */}
      {hasButton && (
        <button className="empty-state-button" type="button" onClick={onButtonClick}>
          <PlusIcon />
          <span>{buttonLabel}</span>
          <PlusIcon />
        </button>
      )}
    </div>
  );
}
