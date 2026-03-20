const imgVector = "http://localhost:3845/assets/8b0dbee2308f9d8d64b90da8975d2720606bceef.svg";
const imgVector1 = "http://localhost:3845/assets/66efcb56393fa43d495f31eeb105a13beea1bfe0.svg";
const imgVectors = "http://localhost:3845/assets/a469de1ef5c758917ffbdd72e3565d8a65e325fc.svg";
const imgVector2 = "http://localhost:3845/assets/0958b23daa53210f99244f9411dd2d61eb7c07f7.svg";
const imgVector3 = "http://localhost:3845/assets/eca54dc8fe6ef086adc04572281627eacffb9aa3.svg";
const imgVector4 = "http://localhost:3845/assets/0d7bfd5ae313390d7aeabdfba598d746b09809cf.svg";
const imgVector5 = "http://localhost:3845/assets/571cb91f5cd12a09f8fe36e0277f583e031caa85.svg";
const imgVector6 = "http://localhost:3845/assets/e3735ec611fedf4a607991f8c335a2fec20ea3cd.svg";
const imgVector7 = "http://localhost:3845/assets/5500390b863f34acd7b94da3eeb576af319b6e70.svg";
const imgVector8 = "http://localhost:3845/assets/d61999510ed300c8848fdc88b5742514a94b2ecf.svg";
const imgVector9 = "http://localhost:3845/assets/54e10172982287915e88a68aa5f6492ed1c16b0e.svg";
const imgVector10 = "http://localhost:3845/assets/18812930ff211840463082a83c5ad7f01e071d0a.svg";
const imgVector11 = "http://localhost:3845/assets/73d751813d81ce488251ce2824e83c6b0da07a01.svg";
const imgVector12 = "http://localhost:3845/assets/0b80da90175abddaf60dd78c176701ab3b00fe42.svg";
const imgAvatar = "http://localhost:3845/assets/cc807b690686eead9144d7b5b89616fd90059679.png";
const imgAvatar1 = "http://localhost:3845/assets/02c01374bbcbfccb56075b24c2be07cbb8fc3ab0.png";
const imgAvatar2 = "http://localhost:3845/assets/8b30d7bf487869ad5becc9eb29ba0fa7831e5232.png";
const imgVector13 = "http://localhost:3845/assets/491b3f47173ae995ac1d6d805d8a185ebb64d79d.svg";
const imgVector14 = "http://localhost:3845/assets/d8215b80e09ac3342d171769baed1fe5d3b1d1b9.svg";
const imgVector15 = "http://localhost:3845/assets/e743f7d505e216f87f32c62608973848daceab6c.svg";
const imgVector16 = "http://localhost:3845/assets/7ff6f88a085c1e84a15f353483e400fc767f1473.svg";
const imgVector17 = "http://localhost:3845/assets/486646a45c4592eef707b49ab00f4a9da35a038f.svg";
const imgVector18 = "http://localhost:3845/assets/42f1f0436326c04bd7de73c6b0ebe848c08c0e2d.svg";
const imgVector19 = "http://localhost:3845/assets/9a3e88b81c262fb4b6e5c89103031d5ed66bef98.svg";
type InputFieldProps = {
  className?: string;
  hasErrorPrompt?: boolean;
  hasLabel?: boolean;
  variant?: "text" | "select" | "search" | "date" | "time" | "password" | "file";
};

function InputField({ className, hasErrorPrompt = false, hasLabel = true, variant = "text" }: InputFieldProps) {
  const isSearch = variant === "search";
  const isText = variant === "text";
  return (
    <div className={className || `${String.raw`content-stretch flex flex-col gap-[var(--spacing\/4,4px)] items-start relative w-[352px] `}${isSearch ? "" : String.raw`opacity-[var(--opacity\/visible,1)] p-[var(--spacing\/0,0px)]`}`} id={isSearch ? "node-1611_8038" : "node-1611_8041"}>
      {isText && hasLabel && (
        <div className="content-stretch flex gap-[var(--spacing\/4,4px)] items-center relative shrink-0" data-name="label" data-node-id="1599:2326">
          <p className="font-[family-name:var(--family\/content,'Inter:medium',sans-serif)] font-[var(--weight\/body\/medium,normal)] leading-[1.6] relative shrink-0 text-[color:var(--color\/fg\/base\/secondary,#3c3f49)] text-[length:var(--size\/body\/sm,14px)] tracking-[var(--letter-spacing\/body\/sm,-0.25px)] whitespace-nowrap" data-node-id="I1599:2326;552:26">
            Label
          </p>
        </div>
      )}
      {isText && (
        <div className="bg-[var(--color\/bg\/base\/onprimarylow,white)] border border-[var(--color\/border\/base,#dbdce1)] border-solid content-stretch flex gap-[var(--spacing\/8,8px)] h-[40px] items-center max-h-[40px] min-h-[40px] px-[var(--spacing\/12,12px)] py-[var(--spacing\/8,8px)] relative rounded-[var(--radius\/8,8px)] shrink-0 w-full" data-name="text-input" data-node-id="1599:2327">
          <div className="content-stretch flex flex-[1_0_0] gap-[var(--spacing\/4,4px)] items-center min-h-px min-w-px relative" data-name="content" data-node-id="I1599:2327;1555:1152">
            <div className="flex flex-[1_0_0] flex-col font-[family-name:var(--family\/content,'Inter:regular',sans-serif)] font-[var(--weight\/body\/regular,normal)] justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[color:var(--color\/fg\/base\/quarternary,#676d7e)] text-[length:var(--size\/body\/sm,14px)] text-ellipsis tracking-[var(--letter-spacing\/body\/sm,-0.25px)] whitespace-nowrap" data-node-id="I1599:2327;677:2405">
              <p className="leading-[1.6] overflow-hidden text-[14px]">Input placeholder</p>
            </div>
          </div>
        </div>
      )}
      {isText && hasErrorPrompt && (
        <div className="bg-[var(--color\/bg\/error\/light,#fff0f0)] content-stretch flex gap-[var(--spacing\/4,4px)] h-[24px] items-center opacity-[var(--opacity\/visible,1)] px-[var(--spacing\/4,4px)] py-[var(--spacing\/0,0px)] relative rounded-[var(--radius\/4,4px)] shrink-0 w-full" data-name=".inline-prompt" data-node-id="1611:1314">
          <div className="relative shrink-0 size-[16px]" data-name="Weight=Fill" data-node-id="I1611:1314;1611:1305">
            <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector" data-node-id="I1611:1314;1611:1305;434:48890">
              <img alt="" className="absolute block max-w-none size-full" src={imgVector} />
            </div>
          </div>
          <p className="flex-[1_0_0] font-[family-name:var(--family\/content,'Inter:regular',sans-serif)] font-[var(--weight\/body\/regular,normal)] leading-[1.6] min-h-px min-w-px relative text-[color:var(--color\/fg\/error\/onlow,#c41717)] text-[length:var(--size\/body\/sm,14px)] tracking-[var(--letter-spacing\/body\/sm,-0.25px)]" data-node-id="I1611:1314;1611:1306">
            Label
          </p>
        </div>
      )}
      {isSearch && hasLabel && (
        <div className="content-stretch flex gap-[var(--spacing\/4,4px)] items-center relative shrink-0" data-name="label" data-node-id="1611:3150">
          <p className="font-[family-name:var(--family\/content,'Inter:medium',sans-serif)] font-[var(--weight\/body\/medium,normal)] leading-[1.6] relative shrink-0 text-[color:var(--color\/fg\/base\/secondary,#3c3f49)] text-[length:var(--size\/body\/sm,14px)] tracking-[var(--letter-spacing\/body\/sm,-0.25px)] whitespace-nowrap" data-node-id="I1611:3150;552:26">
            Search
          </p>
        </div>
      )}
      {isSearch && (
        <div className="bg-[var(--color\/bg\/base\/onprimarylow,white)] border border-[var(--color\/border\/base,#dbdce1)] border-solid content-stretch flex gap-[var(--spacing\/8,8px)] h-[40px] items-center max-h-[40px] min-h-[40px] px-[var(--spacing\/12,12px)] py-[var(--spacing\/8,8px)] relative rounded-[var(--radius\/8,8px)] shrink-0 w-full" data-name="search-input" data-node-id="1611:3151">
          <div className="relative shrink-0 size-[16px]" data-name="Weight=Regular" data-node-id="I1611:3151;682:2407">
            <div className="absolute inset-[9.29%_9.37%_9.37%_9.29%]" data-name="Vector" data-node-id="I1611:3151;682:2407;434:43103">
              <img alt="" className="absolute block max-w-none size-full" src={imgVector1} />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[var(--spacing\/4,4px)] items-center min-h-px min-w-px relative" data-name="content" data-node-id="I1611:3151;1555:1152">
            <div className="flex flex-[1_0_0] flex-col font-[family-name:var(--family\/content,'Inter:regular',sans-serif)] font-[var(--weight\/body\/regular,normal)] justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[color:var(--color\/fg\/base\/quarternary,#676d7e)] text-[length:var(--size\/body\/sm,14px)] text-ellipsis tracking-[var(--letter-spacing\/body\/sm,-0.25px)] whitespace-nowrap" data-node-id="I1611:3151;677:2405">
              <p className="leading-[1.6] overflow-hidden text-[14px]">Type to search...</p>
            </div>
          </div>
        </div>
      )}
      {isSearch && hasErrorPrompt && (
        <div className="bg-[var(--color\/bg\/error\/light,#fff0f0)] content-stretch flex gap-[var(--spacing\/4,4px)] h-[24px] items-center opacity-[var(--opacity\/visible,1)] px-[var(--spacing\/4,4px)] py-[var(--spacing\/0,0px)] relative rounded-[var(--radius\/4,4px)] shrink-0 w-full" data-name=".inline-prompt" data-node-id="1611:3152">
          <div className="relative shrink-0 size-[16px]" data-name="Weight=Fill" data-node-id="I1611:3152;1611:1305">
            <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector" data-node-id="I1611:3152;1611:1305;434:48890">
              <img alt="" className="absolute block max-w-none size-full" src={imgVector} />
            </div>
          </div>
          <p className="flex-[1_0_0] font-[family-name:var(--family\/content,'Inter:regular',sans-serif)] font-[var(--weight\/body\/regular,normal)] leading-[1.6] min-h-px min-w-px relative text-[color:var(--color\/fg\/error\/onlow,#c41717)] text-[length:var(--size\/body\/sm,14px)] tracking-[var(--letter-spacing\/body\/sm,-0.25px)]" data-node-id="I1611:3152;1611:1306">
            No search results
          </p>
        </div>
      )}
    </div>
  );
}
type ProgressBarProps = {
  className?: string;
  percentage?: "0%" | "25%" | "50%" | "75%" | "100%";
};

function ProgressBar({ className, percentage = "0%" }: ProgressBarProps) {
  return (
    <div className={className || "h-[8px] max-h-[8px] min-h-[8px] w-[272px] rounded-full overflow-hidden bg-[#ebecef]"}>
      <div className="h-full rounded-full bg-[#3061ef]" style={{ width: percentage }} />
    </div>
  );
}

function Sidebar({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex flex-col h-[1024px] items-start relative"} data-name=".sidebar" data-node-id="2596:40427">
      <div className="bg-[var(--color\/bg\/base\/primary,white)] border-[var(--color\/border\/base,#dbdce1)] border-r border-solid content-stretch flex flex-[1_0_0] flex-col gap-[var(--spacing\/16,16px)] items-start min-h-px min-w-px px-[var(--spacing\/16,16px)] relative w-[256px]" data-name="sidebar" data-node-id="2596:39660">
        <div className="content-stretch flex h-[72px] items-center justify-between p-[var(--spacing\/0,0px)] relative shrink-0 w-full" data-name="logo-wrapper" data-node-id="I2596:39660;2514:69045">
          <button className="content-stretch cursor-pointer flex gap-[var(--spacing\/8,8px)] h-[32px] items-center max-h-[32px] min-h-[32px] overflow-clip relative shrink-0" data-name="logo" data-node-id="I2596:39660;2514:69046">
            <div className="bg-[var(--color\/bg\/base\/primary,white)] border-[length:var(--border\/1,1px)] border-[var(--color\/border\/base,#dbdce1)] border-solid content-stretch flex flex-col gap-[var(--spacing\/0,0px)] items-center justify-center opacity-[var(--opacity\/visible,1)] overflow-clip p-[var(--spacing\/0,0px)] relative rounded-[var(--radius\/full,800px)] shrink-0 size-[32px]" data-name="Logo" data-node-id="I2596:39660;2514:69046;1631:777">
              <div className="h-[17.436px] relative shrink-0 w-[20px]" data-name="vectors" data-node-id="I2596:39660;2514:69046;1631:785">
                <img alt="" className="absolute block max-w-none size-full" src={imgVectors} />
              </div>
            </div>
            <p className="font-[family-name:var(--family\/heading,'Inter:semibold',sans-serif)] font-[var(--weight\/heading,normal)] leading-[1.4] relative shrink-0 text-[color:var(--color\/fg\/base\/title,#17181c)] text-[length:var(--size\/heading\/xs,20px)] text-left tracking-[var(--letter-spacing\/heading\/xs,-0.5px)] whitespace-nowrap" data-node-id="I2596:39660;2514:69046;1631:783">
              DEMS
            </p>
          </button>
          <div className="content-stretch cursor-pointer flex gap-[var(--spacing\/8,0px)] hover:bg-[#f4f4f6] items-center justify-center max-h-[48px] max-w-[48px] min-h-[48px] min-w-[48px] overflow-clip p-[var(--spacing\/0,0px)] relative rounded-[var(--radius\/8,8px)] shrink-0 size-[48px] transition-colors" data-name="button" data-node-id="I2596:39660;2514:69047">
            <div className="relative shrink-0 size-[24px]" data-name="Weight=Regular" data-node-id="I2596:39660;2514:69047;322:6981">
              <div className="absolute inset-[15.63%]" data-name="Vector" data-node-id="I2596:39660;2514:69047;322:6981;816:99">
                <img alt="" className="absolute block max-w-none size-full" src={imgVector2} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--spacing\/4,4px)] items-start relative shrink-0 w-full" data-name=".sidebar-link-group" data-node-id="I2596:39660;2514:69048">
          <p className="font-[family-name:var(--family\/content,'Inter:medium',sans-serif)] font-[var(--weight\/body\/medium,normal)] leading-[1.6] relative shrink-0 text-[color:var(--color\/fg\/base\/quarternary,#676d7e)] text-[length:var(--size\/body\/sm,14px)] tracking-[var(--letter-spacing\/body\/sm,-0.25px)] w-full" data-node-id="I2596:39660;2514:69048;2514:44031">
            MAIN MENU
          </p>
          <div className="bg-[var(--color\/bg\/base\/inverse,#09090c)] content-stretch flex gap-[var(--gap-\&-padding\/8,8px)] h-[40px] items-center px-[var(--gap-\&-padding\/8,8px)] py-[var(--spacing\/8,8px)] relative rounded-[var(--radius\/8,8px)] shrink-0 w-full" data-name=".link-sidebar" data-node-id="I2596:39660;2514:69048;2514:43898">
            <div className="relative shrink-0 size-[16px]" data-name="Weight=Regular" data-node-id="I2596:39660;2514:69048;2514:43898;931:2106">
              <div className="absolute inset-[15.63%]" data-name="Vector" data-node-id="I2596:39660;2514:69048;2514:43898;931:2106;952:6702">
                <img alt="" className="absolute block max-w-none size-full" src={imgVector3} />
              </div>
            </div>
            <p className="flex-[1_0_0] font-[family-name:var(--family\/content,'Inter:medium',sans-serif)] font-[var(--weight\/body\/medium,normal)] leading-[1.6] min-h-px min-w-px relative text-[color:var(--color\/fg\/base\/inverse,white)] text-[length:var(--size\/body\/sm,14px)] tracking-[var(--letter-spacing\/body\/sm,-0.25px)]" data-node-id="I2596:39660;2514:69048;2514:43898;931:2095">
              Dashboard
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--spacing\/4,4px)] items-start relative shrink-0 w-full" data-name=".sidebar-link-group" data-node-id="I2596:39660;2514:69049">
          <p className="font-[family-name:var(--family\/content,'Inter:medium',sans-serif)] font-[var(--weight\/body\/medium,normal)] leading-[1.6] relative shrink-0 text-[color:var(--color\/fg\/base\/quarternary,#676d7e)] text-[length:var(--size\/body\/sm,14px)] tracking-[var(--letter-spacing\/body\/sm,-0.25px)] w-full" data-node-id="I2596:39660;2514:69049;2514:44301">
            FILES
          </p>
          <div className="content-stretch cursor-pointer flex gap-[var(--gap-\&-padding\/8,8px)] h-[40px] hover:bg-[#f4f4f6] items-center px-[var(--gap-\&-padding\/8,8px)] py-[var(--spacing\/8,8px)] relative rounded-[var(--radius\/8,8px)] shrink-0 transition-colors w-full" data-name=".link-sidebar" data-node-id="I2596:39660;2514:69049;2514:44302">
            <div className="relative shrink-0 size-[16px]" data-name="Weight=Regular" data-node-id="I2596:39660;2514:69049;2514:44302;931:2101">
              <div className="absolute inset-[15.63%]" data-name="Vector" data-node-id="I2596:39660;2514:69049;2514:44302;931:2101;952:6702">
                <img alt="" className="absolute block max-w-none size-full" src={imgVector4} />
              </div>
            </div>
            <p className="flex-[1_0_0] font-[family-name:var(--family\/content,'Inter:medium',sans-serif)] font-[var(--weight\/body\/medium,normal)] leading-[1.6] min-h-px min-w-px relative text-[color:var(--color\/fg\/base\/tertiary,#4e535f)] text-[length:var(--size\/body\/sm,14px)] tracking-[var(--letter-spacing\/body\/sm,-0.25px)]" data-node-id="I2596:39660;2514:69049;2514:44302;931:2090">
              Records
            </p>
          </div>
          <div className="content-stretch cursor-pointer flex gap-[var(--gap-\&-padding\/8,8px)] h-[40px] hover:bg-[#f4f4f6] items-center px-[var(--gap-\&-padding\/8,8px)] py-[var(--spacing\/8,8px)] relative rounded-[var(--radius\/8,8px)] shrink-0 transition-colors w-full" data-name=".link-sidebar" data-node-id="I2596:39660;2514:69049;2514:44303">
            <div className="relative shrink-0 size-[16px]" data-name="Weight=Regular" data-node-id="I2596:39660;2514:69049;2514:44303;931:2101">
              <div className="absolute inset-[15.62%_9.38%_15.63%_9.38%]" data-name="Vector" data-node-id="I2596:39660;2514:69049;2514:44303;931:2101;434:51806">
                <img alt="" className="absolute block max-w-none size-full" src={imgVector5} />
              </div>
            </div>
            <p className="flex-[1_0_0] font-[family-name:var(--family\/content,'Inter:medium',sans-serif)] font-[var(--weight\/body\/medium,normal)] leading-[1.6] min-h-px min-w-px relative text-[color:var(--color\/fg\/base\/tertiary,#4e535f)] text-[length:var(--size\/body\/sm,14px)] tracking-[var(--letter-spacing\/body\/sm,-0.25px)]" data-node-id="I2596:39660;2514:69049;2514:44303;931:2090">
              My files
            </p>
          </div>
          <div className="content-stretch cursor-pointer flex gap-[var(--gap-\&-padding\/8,8px)] h-[40px] hover:bg-[#f4f4f6] items-center px-[var(--gap-\&-padding\/8,8px)] py-[var(--spacing\/8,8px)] relative rounded-[var(--radius\/8,8px)] shrink-0 transition-colors w-full" data-name=".link-sidebar" data-node-id="I2596:39660;2514:69049;2514:44304">
            <div className="relative shrink-0 size-[16px]" data-name="Weight=Regular" data-node-id="I2596:39660;2514:69049;2514:44304;931:2101">
              <div className="absolute inset-[6.24%_15.62%_6.25%_9.36%]" data-name="Vector" data-node-id="I2596:39660;2514:69049;2514:44304;931:2101;434:11165">
                <img alt="" className="absolute block max-w-none size-full" src={imgVector6} />
              </div>
            </div>
            <p className="flex-[1_0_0] font-[family-name:var(--family\/content,'Inter:medium',sans-serif)] font-[var(--weight\/body\/medium,normal)] leading-[1.6] min-h-px min-w-px relative text-[color:var(--color\/fg\/base\/tertiary,#4e535f)] text-[length:var(--size\/body\/sm,14px)] tracking-[var(--letter-spacing\/body\/sm,-0.25px)]" data-node-id="I2596:39660;2514:69049;2514:44304;931:2090">
              Shared files
            </p>
          </div>
          <div className="content-stretch cursor-pointer flex gap-[var(--gap-\&-padding\/8,8px)] h-[40px] hover:bg-[#f4f4f6] items-center px-[var(--gap-\&-padding\/8,8px)] py-[var(--spacing\/8,8px)] relative rounded-[var(--radius\/8,8px)] shrink-0 transition-colors w-full" data-name=".link-sidebar" data-node-id="I2596:39660;2514:69049;2514:44305">
            <div className="relative shrink-0 size-[16px]" data-name="Weight=Regular" data-node-id="I2596:39660;2514:69049;2514:44305;931:2101">
              <div className="absolute inset-[12.52%_9.37%_12.48%_12.5%]" data-name="Vector" data-node-id="I2596:39660;2514:69049;2514:44305;931:2101;434:22650">
                <img alt="" className="absolute block max-w-none size-full" src={imgVector7} />
              </div>
            </div>
            <p className="flex-[1_0_0] font-[family-name:var(--family\/content,'Inter:medium',sans-serif)] font-[var(--weight\/body\/medium,normal)] leading-[1.6] min-h-px min-w-px relative text-[color:var(--color\/fg\/base\/tertiary,#4e535f)] text-[length:var(--size\/body\/sm,14px)] tracking-[var(--letter-spacing\/body\/sm,-0.25px)]" data-node-id="I2596:39660;2514:69049;2514:44305;931:2090">
              Activity log
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--spacing\/4,4px)] items-start relative shrink-0 w-full" data-name=".sidebar-link-group" data-node-id="I2596:39660;2514:69050">
          <p className="font-[family-name:var(--family\/content,'Inter:medium',sans-serif)] font-[var(--weight\/body\/medium,normal)] leading-[1.6] relative shrink-0 text-[color:var(--color\/fg\/base\/quarternary,#676d7e)] text-[length:var(--size\/body\/sm,14px)] tracking-[var(--letter-spacing\/body\/sm,-0.25px)] w-full" data-node-id="I2596:39660;2514:69050;2514:44279">
            ADMIN TOOLS
          </p>
          <div className="content-stretch cursor-pointer flex gap-[var(--gap-\&-padding\/8,8px)] h-[40px] hover:bg-[#f4f4f6] items-center px-[var(--gap-\&-padding\/8,8px)] py-[var(--spacing\/8,8px)] relative rounded-[var(--radius\/8,8px)] shrink-0 transition-colors w-full" data-name=".link-sidebar" data-node-id="I2596:39660;2514:69050;2514:44280">
            <div className="relative shrink-0 size-[16px]" data-name="Weight=Regular" data-node-id="I2596:39660;2514:69050;2514:44280;931:2101">
              <div className="absolute inset-[9.37%]" data-name="Vector" data-node-id="I2596:39660;2514:69050;2514:44280;931:2101;434:64159">
                <img alt="" className="absolute block max-w-none size-full" src={imgVector8} />
              </div>
            </div>
            <p className="flex-[1_0_0] font-[family-name:var(--family\/content,'Inter:medium',sans-serif)] font-[var(--weight\/body\/medium,normal)] leading-[1.6] min-h-px min-w-px relative text-[color:var(--color\/fg\/base\/tertiary,#4e535f)] text-[length:var(--size\/body\/sm,14px)] tracking-[var(--letter-spacing\/body\/sm,-0.25px)]" data-node-id="I2596:39660;2514:69050;2514:44280;931:2090">
              IT tools
            </p>
          </div>
          <div className="content-stretch cursor-pointer flex gap-[var(--gap-\&-padding\/8,8px)] h-[40px] hover:bg-[#f4f4f6] items-center px-[var(--gap-\&-padding\/8,8px)] py-[var(--spacing\/8,8px)] relative rounded-[var(--radius\/8,8px)] shrink-0 transition-colors w-full" data-name=".link-sidebar" data-node-id="I2596:39660;2514:69050;2514:44281">
            <div className="relative shrink-0 size-[16px]" data-name="Weight=Regular" data-node-id="I2596:39660;2514:69050;2514:44281;931:2101">
              <div className="absolute inset-[15.63%_12.5%_6.25%_12.5%]" data-name="Vector" data-node-id="I2596:39660;2514:69050;2514:44281;931:2101;952:6831">
                <img alt="" className="absolute block max-w-none size-full" src={imgVector9} />
              </div>
            </div>
            <p className="flex-[1_0_0] font-[family-name:var(--family\/content,'Inter:medium',sans-serif)] font-[var(--weight\/body\/medium,normal)] leading-[1.6] min-h-px min-w-px relative text-[color:var(--color\/fg\/base\/tertiary,#4e535f)] text-[length:var(--size\/body\/sm,14px)] tracking-[var(--letter-spacing\/body\/sm,-0.25px)]" data-node-id="I2596:39660;2514:69050;2514:44281;931:2090">
              Agency tools
            </p>
          </div>
          <div className="content-stretch cursor-pointer flex gap-[var(--gap-\&-padding\/8,8px)] h-[40px] hover:bg-[#f4f4f6] items-center px-[var(--gap-\&-padding\/8,8px)] py-[var(--spacing\/8,8px)] relative rounded-[var(--radius\/8,8px)] shrink-0 transition-colors w-full" data-name=".link-sidebar" data-node-id="I2596:39660;2514:69050;2514:44282">
            <div className="relative shrink-0 size-[16px]" data-name="Weight=Regular" data-node-id="I2596:39660;2514:69050;2514:44282;931:2101">
              <div className="absolute inset-[7.81%_9.28%_9.44%_9.44%]" data-name="Vector" data-node-id="I2596:39660;2514:69050;2514:44282;931:2101;952:6754">
                <img alt="" className="absolute block max-w-none size-full" src={imgVector10} />
              </div>
            </div>
            <p className="flex-[1_0_0] font-[family-name:var(--family\/content,'Inter:medium',sans-serif)] font-[var(--weight\/body\/medium,normal)] leading-[1.6] min-h-px min-w-px relative text-[color:var(--color\/fg\/base\/tertiary,#4e535f)] text-[length:var(--size\/body\/sm,14px)] tracking-[var(--letter-spacing\/body\/sm,-0.25px)]" data-node-id="I2596:39660;2514:69050;2514:44282;931:2090">
              VPS tools
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--spacing\/4,4px)] items-start relative shrink-0 w-full" data-name=".sidebar-link-group" data-node-id="I2596:39660;2514:69051">
          <p className="font-[family-name:var(--family\/content,'Inter:medium',sans-serif)] font-[var(--weight\/body\/medium,normal)] leading-[1.6] relative shrink-0 text-[color:var(--color\/fg\/base\/quarternary,#676d7e)] text-[length:var(--size\/body\/sm,14px)] tracking-[var(--letter-spacing\/body\/sm,-0.25px)] w-full" data-node-id="I2596:39660;2514:69051;2514:44257">
            NOTIFICATIONS
          </p>
          <div className="content-stretch cursor-pointer flex gap-[var(--gap-\&-padding\/8,8px)] h-[40px] hover:bg-[#f4f4f6] items-center px-[var(--gap-\&-padding\/8,8px)] py-[var(--spacing\/8,8px)] relative rounded-[var(--radius\/8,8px)] shrink-0 transition-colors w-full" data-name=".link-sidebar" data-node-id="I2596:39660;2514:69051;2514:44258">
            <div className="relative shrink-0 size-[16px]" data-name="Weight=Regular" data-node-id="I2596:39660;2514:69051;2514:44258;931:2101">
              <div className="absolute inset-[9.37%_6.25%_12.5%_6.25%]" data-name="Vector" data-node-id="I2596:39660;2514:69051;2514:44258;931:2101;434:76111">
                <img alt="" className="absolute block max-w-none size-full" src={imgVector11} />
              </div>
            </div>
            <p className="flex-[1_0_0] font-[family-name:var(--family\/content,'Inter:medium',sans-serif)] font-[var(--weight\/body\/medium,normal)] leading-[1.6] min-h-px min-w-px relative text-[color:var(--color\/fg\/base\/tertiary,#4e535f)] text-[length:var(--size\/body\/sm,14px)] tracking-[var(--letter-spacing\/body\/sm,-0.25px)]" data-node-id="I2596:39660;2514:69051;2514:44258;931:2090">
              Expiring soon
            </p>
          </div>
          <div className="content-stretch cursor-pointer flex gap-[var(--gap-\&-padding\/8,8px)] h-[40px] hover:bg-[#f4f4f6] items-center px-[var(--gap-\&-padding\/8,8px)] py-[var(--spacing\/8,8px)] relative rounded-[var(--radius\/8,8px)] shrink-0 transition-colors w-full" data-name=".link-sidebar" data-node-id="I2596:39660;2514:69051;2514:44259">
            <div className="relative shrink-0 size-[16px]" data-name="Weight=Regular" data-node-id="I2596:39660;2514:69051;2514:44259;931:2101">
              <div className="absolute inset-[15.63%_3.12%]" data-name="Vector" data-node-id="I2596:39660;2514:69051;2514:44259;931:2101;434:40410">
                <img alt="" className="absolute block max-w-none size-full" src={imgVector12} />
              </div>
            </div>
            <p className="flex-[1_0_0] font-[family-name:var(--family\/content,'Inter:medium',sans-serif)] font-[var(--weight\/body\/medium,normal)] leading-[1.6] min-h-px min-w-px relative text-[color:var(--color\/fg\/base\/tertiary,#4e535f)] text-[length:var(--size\/body\/sm,14px)] tracking-[var(--letter-spacing\/body\/sm,-0.25px)]" data-node-id="I2596:39660;2514:69051;2514:44259;931:2090">
              Upload history
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UserDashboardSubscriptions() {
  return (
    <div className="bg-[var(--color\/bg\/base\/secondary,#f4f4f6)] content-stretch flex items-start overflow-clip relative rounded-[var(--radius\/12,12px)] size-full" data-name="User Dashboard / Subscriptions" data-node-id="2760:53835">
      <Sidebar className="content-stretch flex flex-col h-[1024px] items-start relative shrink-0" />
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--spacing\/0,0px)] items-start min-h-px min-w-px relative self-stretch" data-name="page container" data-node-id="2760:53837">
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name=".Header" data-node-id="2760:53838">
          <div className="bg-[var(--color\/bg\/base\/primary,white)] border-[var(--color\/border\/base,#dbdce1)] border-b-[length:var(--border,1px)] border-solid content-stretch flex flex-[1_0_0] h-[72px] items-center justify-between min-h-px min-w-px px-[var(--spacing\/24,24px)] relative" data-name="Header" data-node-id="I2760:53838;2596:39662">
            <p className="font-[family-name:var(--family\/heading,'Inter:semibold',sans-serif)] font-[var(--weight\/heading,normal)] leading-[1.4] relative shrink-0 text-[color:var(--color\/fg\/base\/primary,#24252d)] text-[length:var(--size\/heading\/sm,24px)] tracking-[var(--letter-spacing\/heading\/sm,-0.5px)] whitespace-nowrap" data-node-id="I2760:53838;2596:39662;2514:44614">
              Agency Name
            </p>
            <div className="content-stretch flex gap-[var(--spacing\/12,12px)] items-center relative shrink-0" data-name="RightSection" data-node-id="I2760:53838;2596:39662;2514:44615">
              <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="icon-wrapper" data-node-id="I2760:53838;2596:39662;2517:9780">
                <div className="content-stretch cursor-pointer flex gap-[var(--spacing\/8,0px)] hover:bg-[#f4f4f6] items-center justify-center max-h-[48px] max-w-[48px] min-h-[48px] min-w-[48px] overflow-clip p-[var(--spacing\/0,0px)] relative rounded-[var(--radius\/8,8px)] shrink-0 size-[48px] transition-colors" data-name="button" data-node-id="I2760:53838;2596:39662;2517:9257">
                  <div className="relative shrink-0 size-[24px]" data-name="Weight=Regular" data-node-id="I2760:53838;2596:39662;2517:9257;322:6981">
                    <div className="absolute inset-[9.38%_12.51%_9.38%_12.5%]" data-name="Vector" data-node-id="I2760:53838;2596:39662;2517:9257;322:6981;434:39111">
                      <img alt="" className="absolute block max-w-none size-full" src={imgVector13} />
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[var(--color\/bg\/error\/primary,#c41717)] content-stretch flex gap-[var(--spacing\/0,0px)] h-[var(--spacing\/16,16px)] items-center justify-center max-h-[16px] min-h-[16px] min-w-[12px] opacity-[var(--opacity\/visible,1)] overflow-clip px-[var(--spacing\/4,4px)] py-[var(--spacing\/0,0px)] right-[6px] rounded-[var(--radius\/full,800px)] top-[4px] w-[16px]" data-name="badge" data-node-id="I2760:53838;2596:39662;2517:9782">
                  <div className="flex flex-[1_0_0] flex-col font-[family-name:var(--family\/content,'Inter:regular',sans-serif)] font-[var(--weight\/body\/regular,normal)] h-full justify-center leading-[0] min-h-px min-w-px relative text-[color:var(--color\/fg\/error\/onhigh,#fff0f0)] text-[length:var(--size\/body\/xs,12px)] text-center tracking-[var(--letter-spacing\/body\/xs,0px)]" data-node-id="I2760:53838;2596:39662;2517:9782;607:4350">
                    <p className="leading-[1.6]">4</p>
                  </div>
                </div>
              </div>
              <div className="border border-[var(--color\/border\/base,#dbdce1)] border-solid content-stretch flex flex-col gap-[var(--spacing\/0,0px)] items-start p-[var(--spacing\/0,0px)] relative rounded-[var(--radius\/full,800px)] shrink-0 size-[40px]" data-name="avatar" data-node-id="I2760:53838;2596:39662;2517:9645">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[var(--radius\/full,800px)]">
                  <img alt="" className="absolute max-w-none object-cover rounded-[var(--radius\/full,800px)] size-full" src={imgAvatar} />
                  <img alt="" className="absolute max-w-none object-cover rounded-[var(--radius\/full,800px)] size-full" src={imgAvatar1} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[var(--color\/bg\/base\/secondary,#f4f4f6)] content-stretch flex flex-[1_0_0] flex-col gap-[var(--spacing\/24,24px)] items-start min-h-px min-w-px p-[var(--spacing\/24,24px)] relative w-full" data-name="page data" data-node-id="2760:53839">
          <p className="font-[family-name:var(--family\/heading,'Inter:semibold',sans-serif)] font-[var(--weight\/heading,normal)] leading-[1.4] relative shrink-0 text-[color:var(--color\/fg\/base\/title,#17181c)] text-[length:var(--size\/heading\/sm,24px)] tracking-[var(--letter-spacing\/heading\/sm,-0.5px)] w-full" data-node-id="2760:53840">
            Welcome John
          </p>
          <div className="content-stretch flex flex-col gap-[var(--spacing\/4,4px)] items-start relative shrink-0 w-full" data-name="page description" data-node-id="2760:53841">
            <p className="font-[family-name:var(--family\/heading,'Inter:semibold',sans-serif)] font-[var(--weight\/heading,normal)] leading-[1.4] relative shrink-0 text-[color:var(--color\/fg\/base\/title,#17181c)] text-[length:var(--size\/heading\/xs,20px)] tracking-[var(--letter-spacing\/heading\/xs,-0.5px)] w-full" data-node-id="2760:53842">
              Subscription overview
            </p>
            <p className="font-[family-name:var(--family\/content,'Inter:regular',sans-serif)] font-[var(--weight\/body\/regular,normal)] leading-[1.6] relative shrink-0 text-[color:var(--color\/fg\/base\/tertiary,#4e535f)] text-[length:var(--size\/body\/sm,14px)] tracking-[var(--letter-spacing\/body\/sm,-0.25px)] w-full" data-node-id="2760:53843">
              Manage your subscription, storage, seats, and team members.
            </p>
          </div>
          <div className="gap-x-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full" data-name="card container" data-node-id="2760:53844">
            <div className="bg-[var(--color\/bg\/base\/primary,white)] border-[length:var(--border\/1,1px)] border-[var(--color\/border\/base,#dbdce1)] border-solid col-1 content-stretch flex flex-col items-center justify-self-stretch overflow-clip relative rounded-[var(--radius\/16,16px)] row-1 self-start shrink-0" data-name="section-template" data-node-id="2760:53845">
              <div className="content-stretch flex gap-[var(--spacing\/12,12px)] h-[64px] items-center pb-[var(--spacing\/8,8px)] pt-[var(--spacing\/16,16px)] px-[var(--spacing\/16,16px)] relative shrink-0 w-full" data-name=".CardHeading" data-node-id="I2760:53845;2553:5105">
                <div className="content-stretch flex flex-[1_0_0] gap-[var(--spacing\/8,8px)] h-[32px] items-center min-h-px min-w-px relative" data-node-id="I2760:53845;2553:5106">
                  <div className="bg-[var(--color\/bg\/brand\/light,#f0f6ff)] content-stretch flex gap-[var(--spacing\/0,0px)] items-center justify-center opacity-[var(--opacity\/visible,1)] p-[var(--spacing\/0,0px)] relative rounded-[var(--radius\/full,800px)] shrink-0 size-[32px]" data-name="title-icon" data-node-id="I2760:53845;2553:5107">
                    <div className="relative shrink-0 size-[20px]" data-name="Weight=Regular" data-node-id="I2760:53845;2553:5108">
                      <div className="absolute inset-[18.75%_6.25%]" data-name="Vector" data-node-id="I2760:53845;2553:5108;434:48968">
                        <img alt="" className="absolute block max-w-none size-full" src={imgVector14} />
                      </div>
                    </div>
                  </div>
                  <p className="font-[family-name:var(--family\/heading,'Inter:semibold',sans-serif)] font-[var(--weight\/heading,normal)] leading-[1.4] relative shrink-0 text-[color:var(--color\/fg\/base\/primary,#24252d)] text-[length:var(--size\/heading\/xs,20px)] tracking-[var(--letter-spacing\/heading\/xs,-0.5px)] whitespace-nowrap" data-node-id="I2760:53845;2553:5109">
                    Storage availability
                  </p>
                </div>
              </div>
              <div className="content-stretch flex items-start justify-center p-[var(--spacing\/16,16px)] relative rounded-[var(--radius\/8,8px)] shrink-0 w-full" data-name=".Slot" data-node-id="I2760:53845;2553:5115">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--spacing\/12,12px)] items-start min-h-px min-w-px relative" data-name=".storage info" data-node-id="I2760:53845;2553:5396">
                  <div className="content-stretch flex gap-[var(--spacing\/0,0px)] items-end leading-[0] relative shrink-0 whitespace-nowrap" data-name="GBs" data-node-id="I2760:53845;2553:5396;2596:41379">
                    <div className="flex flex-col font-[family-name:var(--family\/heading,'Inter:semibold',sans-serif)] font-[var(--weight\/heading,normal)] justify-center relative shrink-0 text-[color:var(--color\/fg\/base\/primary,#24252d)] text-[length:var(--size\/heading\/sm,24px)] tracking-[var(--letter-spacing\/heading\/sm,-0.5px)]" data-node-id="I2760:53845;2553:5396;2596:41377">
                      <p className="leading-[1.4]">342</p>
                    </div>
                    <div className="flex flex-col font-[family-name:var(--family\/content,'Inter:medium',sans-serif)] font-[var(--weight\/body\/medium,normal)] justify-center relative shrink-0 text-[color:var(--color\/fg\/base\/tertiary,#4e535f)] text-[length:var(--size\/body\/sm,14px)] text-center tracking-[var(--letter-spacing\/body\/sm,-0.25px)]" data-node-id="I2760:53845;2553:5396;2596:41378">
                      <p className="leading-[1.6]">/500 GB</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[var(--spacing\/4,4px)] items-start relative shrink-0 w-full" data-name="progress" data-node-id="I2760:53845;2553:5396;2596:41387">
                    <div className="content-stretch flex font-[family-name:var(--family\/content,'Inter:medium',sans-serif)] font-[var(--weight\/body\/medium,normal)] items-center justify-between leading-[1.6] relative shrink-0 text-[color:var(--color\/fg\/base\/tertiary,#4e535f)] text-[length:var(--size\/body\/sm,14px)] tracking-[var(--letter-spacing\/body\/sm,-0.25px)] w-full whitespace-nowrap" data-name="storage data" data-node-id="I2760:53845;2553:5396;2596:41385">
                      <p className="relative shrink-0" data-node-id="I2760:53845;2553:5396;2596:41383">
                        68.4% Used
                      </p>
                      <p className="relative shrink-0" data-node-id="I2760:53845;2553:5396;2596:41381">
                        158 GB available
                      </p>
                    </div>
                    <ProgressBar className="h-[8px] max-h-[8px] min-h-[8px] w-full rounded-full overflow-hidden bg-[#ebecef] shrink-0" percentage="50%" />
                    <div className="content-stretch flex font-[family-name:var(--family\/content,'Inter:medium',sans-serif)] font-[var(--weight\/body\/medium,normal)] items-center justify-between leading-[1.6] relative shrink-0 text-[color:var(--color\/fg\/base\/tertiary,#4e535f)] text-[length:var(--size\/body\/sm,14px)] tracking-[var(--letter-spacing\/body\/sm,-0.25px)] w-full whitespace-nowrap" data-name="storage qty" data-node-id="I2760:53845;2553:5396;2596:41386">
                      <p className="relative shrink-0" data-node-id="I2760:53845;2553:5396;2596:41382">
                        0 GB
                      </p>
                      <p className="relative shrink-0" data-node-id="I2760:53845;2553:5396;2596:41384">
                        500 GB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[var(--spacing\/12,0px)] items-center justify-end pb-[var(--spacing\/16,16px)] pt-[var(--spacing\/8,8px)] px-[var(--spacing\/16,16px)] relative shrink-0 w-full" data-name=".CardHeading" data-node-id="I2760:53845;2555:31147">
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="filters+actions" data-node-id="I2760:53845;2555:31152">
                  <div className="bg-[var(--color\/bg\/brand\/primary,#3061ef)] content-stretch cursor-pointer flex gap-[var(--spacing\/8,8px)] h-[40px] hover:bg-[#1e49c6] items-center justify-center max-h-[40px] min-h-[40px] overflow-clip px-[var(--spacing\/16,16px)] py-[var(--spacing\/0,0px)] relative rounded-[var(--radius\/8,8px)] shrink-0 transition-colors" data-name="button" data-node-id="I2760:53845;2555:31196">
                    <p className="font-[family-name:var(--family\/content,'Inter:medium',sans-serif)] font-[var(--weight\/body\/medium,normal)] leading-[1.6] relative shrink-0 text-[color:var(--color\/fg\/base\/white,white)] text-[length:var(--size\/body\/sm,14px)] tracking-[var(--letter-spacing\/body\/sm,-0.25px)] whitespace-nowrap" data-node-id="I2760:53845;2555:31196;322:7222">
                      Upgrade storage
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[var(--color\/bg\/base\/primary,white)] border-[length:var(--border\/1,1px)] border-[var(--color\/border\/base,#dbdce1)] border-solid col-2 content-stretch flex flex-col items-center justify-self-stretch overflow-clip relative rounded-[var(--radius\/16,16px)] row-1 self-stretch shrink-0" data-name="section-template" data-node-id="2760:53846">
              <div className="content-stretch flex gap-[var(--spacing\/12,12px)] h-[64px] items-center pb-[var(--spacing\/8,8px)] pt-[var(--spacing\/16,16px)] px-[var(--spacing\/16,16px)] relative shrink-0 w-full" data-name=".CardHeading" data-node-id="I2760:53846;2553:5105">
                <div className="content-stretch flex flex-[1_0_0] gap-[var(--spacing\/8,8px)] h-[32px] items-center min-h-px min-w-px relative" data-node-id="I2760:53846;2553:5106">
                  <div className="bg-[var(--color\/bg\/brand\/light,#f0f6ff)] content-stretch flex gap-[var(--spacing\/0,0px)] items-center justify-center opacity-[var(--opacity\/visible,1)] p-[var(--spacing\/0,0px)] relative rounded-[var(--radius\/full,800px)] shrink-0 size-[32px]" data-name="title-icon" data-node-id="I2760:53846;2553:5107">
                    <div className="relative shrink-0 size-[20px]" data-name="Weight=Regular" data-node-id="I2760:53846;2553:5108">
                      <div className="absolute inset-[18.75%_3.12%_12.39%_3.12%]" data-name="Vector" data-node-id="I2760:53846;2553:5108;434:72574">
                        <img alt="" className="absolute block max-w-none size-full" src={imgVector15} />
                      </div>
                    </div>
                  </div>
                  <p className="font-[family-name:var(--family\/heading,'Inter:semibold',sans-serif)] font-[var(--weight\/heading,normal)] leading-[1.4] relative shrink-0 text-[color:var(--color\/fg\/base\/primary,#24252d)] text-[length:var(--size\/heading\/xs,20px)] tracking-[var(--letter-spacing\/heading\/xs,-0.5px)] whitespace-nowrap" data-node-id="I2760:53846;2553:5109">
                    Seats Available
                  </p>
                </div>
              </div>
              <div className="content-stretch flex items-start justify-center p-[var(--spacing\/16,16px)] relative rounded-[var(--radius\/8,8px)] shrink-0 w-full" data-name=".Slot" data-node-id="I2760:53846;2553:5115">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--spacing\/12,12px)] items-start min-h-px min-w-px relative" data-name=".storage info" data-node-id="I2760:53846;2553:5396">
                  <div className="content-stretch flex gap-[var(--spacing\/0,0px)] items-end leading-[0] relative shrink-0 whitespace-nowrap" data-name="GBs" data-node-id="I2760:53846;2553:5396;2596:41379">
                    <div className="flex flex-col font-[family-name:var(--family\/heading,'Inter:semibold',sans-serif)] font-[var(--weight\/heading,normal)] justify-center relative shrink-0 text-[color:var(--color\/fg\/base\/primary,#24252d)] text-[length:var(--size\/heading\/sm,24px)] tracking-[var(--letter-spacing\/heading\/sm,-0.5px)]" data-node-id="I2760:53846;2553:5396;2596:41377">
                      <p className="leading-[1.4]">24</p>
                    </div>
                    <div className="flex flex-col font-[family-name:var(--family\/content,'Inter:medium',sans-serif)] font-[var(--weight\/body\/medium,normal)] justify-center relative shrink-0 text-[color:var(--color\/fg\/base\/tertiary,#4e535f)] text-[length:var(--size\/body\/sm,14px)] text-center tracking-[var(--letter-spacing\/body\/sm,-0.25px)]" data-node-id="I2760:53846;2553:5396;2596:41378">
                      <p className="leading-[1.6]">/50 seats</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[var(--spacing\/4,4px)] items-start relative shrink-0 w-full" data-name="progress" data-node-id="I2760:53846;2553:5396;2596:41387">
                    <div className="content-stretch flex font-[family-name:var(--family\/content,'Inter:medium',sans-serif)] font-[var(--weight\/body\/medium,normal)] items-center justify-between leading-[1.6] relative shrink-0 text-[color:var(--color\/fg\/base\/tertiary,#4e535f)] text-[length:var(--size\/body\/sm,14px)] tracking-[var(--letter-spacing\/body\/sm,-0.25px)] w-full whitespace-nowrap" data-name="storage data" data-node-id="I2760:53846;2553:5396;2596:41385">
                      <p className="relative shrink-0" data-node-id="I2760:53846;2553:5396;2596:41383">
                        48% Used
                      </p>
                      <p className="relative shrink-0" data-node-id="I2760:53846;2553:5396;2596:41381">
                        26 seats available
                      </p>
                    </div>
                    <ProgressBar className="h-[8px] max-h-[8px] min-h-[8px] w-full rounded-full overflow-hidden bg-[#ebecef] shrink-0" percentage="50%" />
                    <div className="content-stretch flex font-[family-name:var(--family\/content,'Inter:medium',sans-serif)] font-[var(--weight\/body\/medium,normal)] items-center justify-between leading-[1.6] relative shrink-0 text-[color:var(--color\/fg\/base\/tertiary,#4e535f)] text-[length:var(--size\/body\/sm,14px)] tracking-[var(--letter-spacing\/body\/sm,-0.25px)] w-full whitespace-nowrap" data-name="storage qty" data-node-id="I2760:53846;2553:5396;2596:41386">
                      <p className="relative shrink-0" data-node-id="I2760:53846;2553:5396;2596:41382">
                        0 seats
                      </p>
                      <p className="relative shrink-0" data-node-id="I2760:53846;2553:5396;2596:41384">
                        50 seats
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[var(--spacing\/12,0px)] items-center justify-end pb-[var(--spacing\/16,16px)] pt-[var(--spacing\/8,8px)] px-[var(--spacing\/16,16px)] relative shrink-0 w-full" data-name=".CardHeading" data-node-id="I2760:53846;2555:31147">
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="filters+actions" data-node-id="I2760:53846;2555:31152">
                  <div className="content-stretch cursor-pointer flex gap-[var(--spacing\/8,8px)] h-[40px] hover:bg-[#ebf0ff] items-center justify-center max-h-[40px] min-h-[40px] overflow-clip px-[var(--spacing\/16,16px)] py-[var(--spacing\/0,0px)] relative rounded-[var(--radius\/8,8px)] shrink-0 transition-colors" data-name="button" data-node-id="I2760:53846;2555:31156">
                    <p className="font-[family-name:var(--family\/content,'Inter:medium',sans-serif)] font-[var(--weight\/body\/medium,normal)] leading-[1.6] relative shrink-0 text-[color:var(--color\/fg\/brand\/onlow,#1e49c6)] text-[length:var(--size\/body\/sm,14px)] tracking-[var(--letter-spacing\/body\/sm,-0.25px)] whitespace-nowrap" data-node-id="I2760:53846;2555:31156;322:7166">
                      Add seats
                    </p>
                  </div>
                  <div className="bg-[var(--color\/bg\/brand\/primary,#3061ef)] content-stretch cursor-pointer flex gap-[var(--spacing\/8,8px)] h-[40px] hover:bg-[#1e49c6] items-center justify-center max-h-[40px] min-h-[40px] overflow-clip px-[var(--spacing\/16,16px)] py-[var(--spacing\/0,0px)] relative rounded-[var(--radius\/8,8px)] shrink-0 transition-colors" data-name="button" data-node-id="I2760:53846;2555:31196">
                    <p className="font-[family-name:var(--family\/content,'Inter:medium',sans-serif)] font-[var(--weight\/body\/medium,normal)] leading-[1.6] relative shrink-0 text-[color:var(--color\/fg\/base\/white,white)] text-[length:var(--size\/body\/sm,14px)] tracking-[var(--letter-spacing\/body\/sm,-0.25px)] whitespace-nowrap" data-node-id="I2760:53846;2555:31196;322:7222">
                      Manage
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[var(--color\/bg\/base\/primary,white)] border-[length:var(--border\/1,1px)] border-[var(--color\/border\/base,#dbdce1)] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/16,16px)] shrink-0 w-full" data-name="section-template" data-node-id="2760:53847">
            <div className="content-stretch flex gap-[var(--spacing\/12,12px)] h-[64px] items-center pb-[var(--spacing\/8,8px)] pt-[var(--spacing\/16,16px)] px-[var(--spacing\/16,16px)] relative shrink-0 w-full" data-name=".CardHeading" data-node-id="I2760:53847;2553:5105">
              <div className="content-stretch flex flex-[1_0_0] gap-[var(--spacing\/8,8px)] h-[32px] items-center min-h-px min-w-px relative" data-node-id="I2760:53847;2553:5106">
                <div className="bg-[var(--color\/bg\/brand\/light,#f0f6ff)] content-stretch flex gap-[var(--spacing\/0,0px)] items-center justify-center opacity-[var(--opacity\/visible,1)] p-[var(--spacing\/0,0px)] relative rounded-[var(--radius\/full,800px)] shrink-0 size-[32px]" data-name="title-icon" data-node-id="I2760:53847;2553:5107">
                  <div className="relative shrink-0 size-[20px]" data-name="Weight=Regular" data-node-id="I2760:53847;2553:5108">
                    <div className="absolute inset-[12.5%_12.49%_12.5%_12.5%]" data-name="Vector" data-node-id="I2760:53847;2553:5108;434:5418">
                      <img alt="" className="absolute block max-w-none size-full" src={imgVector16} />
                    </div>
                  </div>
                </div>
                <p className="font-[family-name:var(--family\/heading,'Inter:semibold',sans-serif)] font-[var(--weight\/heading,normal)] leading-[1.4] relative shrink-0 text-[color:var(--color\/fg\/base\/primary,#24252d)] text-[length:var(--size\/heading\/xs,20px)] tracking-[var(--letter-spacing\/heading\/xs,-0.5px)] whitespace-nowrap" data-node-id="I2760:53847;2553:5109">
                  User management
                </p>
              </div>
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="filters+actions" data-node-id="I2760:53847;2553:5338">
                <div className="border border-[var(--color\/border\/brand,#1e49c6)] border-solid content-stretch cursor-pointer flex gap-[var(--spacing\/8,8px)] h-[40px] hover:bg-[#ebf0ff] items-center justify-center max-h-[40px] min-h-[40px] overflow-clip px-[var(--spacing\/16,16px)] py-[var(--spacing\/0,0px)] relative rounded-[var(--radius\/8,8px)] shrink-0 transition-colors" data-name="button" data-node-id="I2760:53847;2553:5111">
                  <div className="relative shrink-0 size-[16px]" data-name="Weight=Regular" data-node-id="I2760:53847;2553:5111;322:7083">
                    <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector" data-node-id="I2760:53847;2553:5111;322:7083;434:48312">
                      <img alt="" className="absolute block max-w-none size-full" src={imgVector17} />
                    </div>
                  </div>
                  <p className="font-[family-name:var(--family\/content,'Inter:medium',sans-serif)] font-[var(--weight\/body\/medium,normal)] leading-[1.6] relative shrink-0 text-[color:var(--color\/fg\/brand\/onlow,#1e49c6)] text-[length:var(--size\/body\/sm,14px)] tracking-[var(--letter-spacing\/body\/sm,-0.25px)] whitespace-nowrap" data-node-id="I2760:53847;2553:5111;322:7084">
                    Add users
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-start justify-center p-[var(--spacing\/16,16px)] relative rounded-[var(--radius\/8,8px)] shrink-0 w-full" data-name=".Slot" data-node-id="I2760:53847;2553:5115">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--spacing\/24,24px)] items-start min-h-px min-w-px relative" data-name=".users table" data-node-id="I2760:53847;2553:5396">
                <InputField className="content-stretch flex flex-col gap-[var(--spacing\/4,4px)] items-start relative shrink-0 w-[352px]" hasLabel={false} variant="search" />
                <div className="border border-[var(--color\/border\/base,#dbdce1)] border-solid content-stretch flex flex-col gap-[var(--spacing\/n1,0px)] items-start overflow-clip pb-px relative rounded-[var(--radius\/12,12px)] shrink-0 w-full" data-node-id="I2760:53847;2553:5396;2603:43103">
                  <div className="content-stretch flex gap-[var(--spacing\/n1,0px)] items-center mb-[-1px] pr-px relative shrink-0 w-full" data-name="table header" data-node-id="I2760:53847;2553:5396;2603:43029">
                    <div className="bg-[var(--color\/bg\/brand\/light,#f0f6ff)] border-[length:var(--border,1px)] border-[var(--color\/border\/base,#dbdce1)] border-solid content-stretch flex flex-[1_0_0] gap-[var(--spacing\/4,4px)] h-[48px] items-center max-h-[48px] min-h-[48px] min-w-px mr-[-1px] overflow-clip px-[var(--gap-\&-padding---legacy\/16,16px)] py-[var(--gap-\&-padding---legacy\/12,12px)] relative" data-name="table-cell" data-node-id="I2760:53847;2553:5396;2603:43030">
                      <p className="flex-[1_0_0] font-[family-name:var(--family\/content,'Inter:semibold',sans-serif)] font-[var(--weight\/body\/semibold,normal)] leading-[1.6] min-h-px min-w-px overflow-hidden relative text-[14px] text-[color:var(--color\/fg\/base\/primary,#24252d)] text-ellipsis tracking-[var(--letter-spacing\/body\/sm,-0.25px)] whitespace-nowrap" data-node-id="I2760:53847;2553:5396;2603:43030;2172:1281">
                        User
                      </p>
                    </div>
                    <div className="bg-[var(--color\/bg\/brand\/light,#f0f6ff)] border-[length:var(--border,1px)] border-[var(--color\/border\/base,#dbdce1)] border-solid content-stretch flex flex-[1_0_0] gap-[var(--spacing\/4,4px)] h-[48px] items-center max-h-[48px] min-h-[48px] min-w-px mr-[-1px] overflow-clip px-[var(--gap-\&-padding---legacy\/16,16px)] py-[var(--gap-\&-padding---legacy\/12,12px)] relative" data-name="table-cell" data-node-id="I2760:53847;2553:5396;2603:43031">
                      <p className="flex-[1_0_0] font-[family-name:var(--family\/content,'Inter:semibold',sans-serif)] font-[var(--weight\/body\/semibold,normal)] leading-[1.6] min-h-px min-w-px overflow-hidden relative text-[14px] text-[color:var(--color\/fg\/base\/primary,#24252d)] text-ellipsis tracking-[var(--letter-spacing\/body\/sm,-0.25px)] whitespace-nowrap" data-node-id="I2760:53847;2553:5396;2603:43031;2172:1281">
                        Role
                      </p>
                    </div>
                    <div className="bg-[var(--color\/bg\/brand\/light,#f0f6ff)] border-[length:var(--border,1px)] border-[var(--color\/border\/base,#dbdce1)] border-solid content-stretch flex flex-[1_0_0] gap-[var(--spacing\/4,4px)] h-[48px] items-center max-h-[48px] min-h-[48px] min-w-px mr-[-1px] overflow-clip px-[var(--gap-\&-padding---legacy\/16,16px)] py-[var(--gap-\&-padding---legacy\/12,12px)] relative" data-name="table-cell" data-node-id="I2760:53847;2553:5396;2603:43032">
                      <p className="flex-[1_0_0] font-[family-name:var(--family\/content,'Inter:semibold',sans-serif)] font-[var(--weight\/body\/semibold,normal)] leading-[1.6] min-h-px min-w-px overflow-hidden relative text-[14px] text-[color:var(--color\/fg\/base\/primary,#24252d)] text-ellipsis tracking-[var(--letter-spacing\/body\/sm,-0.25px)] whitespace-nowrap" data-node-id="I2760:53847;2553:5396;2603:43032;2172:1281">
                        Status
                      </p>
                    </div>
                    <div className="bg-[var(--color\/bg\/brand\/light,#f0f6ff)] border-[length:var(--border,1px)] border-[var(--color\/border\/base,#dbdce1)] border-solid content-stretch flex flex-[1_0_0] gap-[var(--spacing\/4,4px)] h-[48px] items-center max-h-[48px] min-h-[48px] min-w-px mr-[-1px] overflow-clip px-[var(--gap-\&-padding---legacy\/16,16px)] py-[var(--gap-\&-padding---legacy\/12,12px)] relative" data-name="table-cell" data-node-id="I2760:53847;2553:5396;2603:43033">
                      <p className="flex-[1_0_0] font-[family-name:var(--family\/content,'Inter:semibold',sans-serif)] font-[var(--weight\/body\/semibold,normal)] leading-[1.6] min-h-px min-w-px overflow-hidden relative text-[14px] text-[color:var(--color\/fg\/base\/primary,#24252d)] text-ellipsis tracking-[var(--letter-spacing\/body\/sm,-0.25px)] whitespace-nowrap" data-node-id="I2760:53847;2553:5396;2603:43033;2172:1281">
                        Last active
                      </p>
                    </div>
                    <div className="bg-[var(--color\/bg\/brand\/light,#f0f6ff)] border-[length:var(--border,1px)] border-[var(--color\/border\/base,#dbdce1)] border-solid content-stretch flex flex-[1_0_0] gap-[var(--spacing\/4,4px)] h-[48px] items-center max-h-[48px] min-h-[48px] min-w-px mr-[-1px] overflow-clip px-[var(--gap-\&-padding---legacy\/16,16px)] py-[var(--gap-\&-padding---legacy\/12,12px)] relative" data-name="table-cell" data-node-id="I2760:53847;2553:5396;2603:43034">
                      <p className="flex-[1_0_0] font-[family-name:var(--family\/content,'Inter:semibold',sans-serif)] font-[var(--weight\/body\/semibold,normal)] leading-[1.6] min-h-px min-w-px overflow-hidden relative text-[14px] text-[color:var(--color\/fg\/base\/primary,#24252d)] text-ellipsis tracking-[var(--letter-spacing\/body\/sm,-0.25px)] whitespace-nowrap" data-node-id="I2760:53847;2553:5396;2603:43034;2172:1281">
                        &nbsp;
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[var(--spacing\/n1,0px)] items-center mb-[-1px] pr-px relative shrink-0 w-full" data-name="table header" data-node-id="I2760:53847;2553:5396;2599:42350">
                    <div className="border-[length:var(--border,1px)] border-[var(--color\/border\/base,#dbdce1)] border-solid content-stretch flex flex-[1_0_0] gap-[var(--gap-\&-padding---legacy\/8,0px)] h-[56px] items-center max-h-[56px] min-h-[56px] min-w-px mr-[-1px] overflow-clip px-[var(--gap-\&-padding---legacy\/16,16px)] py-[var(--gap-\&-padding---legacy\/12,12px)] relative" data-name="table-cell" data-node-id="I2760:53847;2553:5396;2599:42351">
                      <div className="content-stretch flex flex-[1_0_0] gap-[var(--space-2,8px)] items-center min-h-px min-w-px relative" data-name=".Avatar" data-node-id="I2760:53847;2553:5396;2599:42351;1900:653">
                        <div className="border border-[var(--color\/border\/base,#dbdce1)] border-solid content-stretch flex flex-col gap-[var(--spacing\/0,0px)] items-start p-[var(--spacing\/0,0px)] relative rounded-[var(--radius\/full,800px)] shrink-0 size-[32px]" data-name="avatar" data-node-id="I2760:53847;2553:5396;2599:42351;1900:654">
                          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[var(--radius\/full,800px)]">
                            <img alt="" className="absolute max-w-none object-cover rounded-[var(--radius\/full,800px)] size-full" src={imgAvatar} />
                            <img alt="" className="absolute max-w-none object-cover rounded-[var(--radius\/full,800px)] size-full" src={imgAvatar2} />
                          </div>
                        </div>
                        <p className="flex-[1_0_0] font-[family-name:var(--family\/content,'Inter:regular',sans-serif)] font-[var(--weight\/body\/regular,normal)] leading-[1.6] min-h-px min-w-px overflow-hidden relative text-[14px] text-[color:var(--color\/fg\/base\/secondary,#3c3f49)] text-ellipsis tracking-[var(--letter-spacing\/body\/sm,-0.25px)] whitespace-nowrap" data-node-id="I2760:53847;2553:5396;2599:42351;1900:655">
                          John Smith
                        </p>
                      </div>
                    </div>
                    <div className="border-[length:var(--border,1px)] border-[var(--color\/border\/base,#dbdce1)] border-solid content-stretch flex flex-[1_0_0] gap-[var(--gap-\&-padding---legacy\/8,0px)] h-[56px] items-center max-h-[56px] min-h-[56px] min-w-px mr-[-1px] overflow-clip px-[var(--gap-\&-padding---legacy\/16,16px)] py-[var(--gap-\&-padding---legacy\/12,12px)] relative" data-name="table-cell" data-node-id="I2760:53847;2553:5396;2599:42352">
                      <div className="bg-[var(--color\/bg\/warning\/light,#fefef1)] content-stretch flex gap-[var(--spacing\/4,4px)] h-[24px] items-center justify-center max-h-[24px] min-h-[24px] opacity-[var(--opacity\/visible,1)] px-[var(--spacing\/8,8px)] py-[var(--spacing\/0,0px)] relative rounded-[var(--radius\/4,4px)] shrink-0" data-name="tag" data-node-id="I2760:53847;2553:5396;2599:42352;1900:1572">
                        <div className="relative shrink-0 size-[12px]" data-name="Weight=Regular" data-node-id="I2760:53847;2553:5396;2599:42352;1900:1572;529:1727">
                          <div className="absolute inset-[6.25%_6.25%_9.38%_6.25%]" data-name="Vector" data-node-id="I2760:53847;2553:5396;2599:42352;1900:1572;529:1727;434:11257">
                            <img alt="" className="absolute block max-w-none size-full" src={imgVector18} />
                          </div>
                        </div>
                        <div className="flex flex-col font-[family-name:var(--family\/content,'Inter:regular',sans-serif)] font-[var(--weight\/body\/regular,normal)] justify-center leading-[0] relative shrink-0 text-[color:var(--color\/fg\/warning\/onlow,#a16207)] text-[length:var(--size\/body\/xs,12px)] text-center tracking-[var(--letter-spacing\/body\/xs,0px)] whitespace-nowrap" data-node-id="I2760:53847;2553:5396;2599:42352;1900:1572;529:1728">
                          <p className="leading-[1.6]">Admin</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-[length:var(--border,1px)] border-[var(--color\/border\/base,#dbdce1)] border-solid content-stretch flex flex-[1_0_0] gap-[var(--gap-\&-padding---legacy\/8,0px)] h-[56px] items-center max-h-[56px] min-h-[56px] min-w-px mr-[-1px] overflow-clip px-[var(--gap-\&-padding---legacy\/16,16px)] py-[var(--gap-\&-padding---legacy\/12,12px)] relative" data-name="table-cell" data-node-id="I2760:53847;2553:5396;2599:42353">
                      <div className="bg-[var(--color\/bg\/success\/light,#f1fdf5)] content-stretch flex gap-[var(--spacing\/4,4px)] h-[24px] items-center justify-center max-h-[24px] min-h-[24px] opacity-[var(--opacity\/visible,1)] px-[var(--spacing\/8,8px)] py-[var(--spacing\/0,0px)] relative rounded-[var(--radius\/4,4px)] shrink-0" data-name="tag" data-node-id="I2760:53847;2553:5396;2599:42353;1900:1572">
                        <div className="flex flex-col font-[family-name:var(--family\/content,'Inter:regular',sans-serif)] font-[var(--weight\/body\/regular,normal)] justify-center leading-[0] relative shrink-0 text-[color:var(--color\/fg\/success\/onlow,#0b8437)] text-[length:var(--size\/body\/xs,12px)] text-center tracking-[var(--letter-spacing\/body\/xs,0px)] whitespace-nowrap" data-node-id="I2760:53847;2553:5396;2599:42353;1900:1572;524:1644">
                          <p className="leading-[1.6]">Active</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-[length:var(--border,1px)] border-[var(--color\/border\/base,#dbdce1)] border-solid content-stretch flex flex-[1_0_0] gap-[var(--spacing\/4,4px)] h-[56px] items-center max-h-[56px] min-h-[56px] min-w-px mr-[-1px] overflow-clip px-[var(--gap-\&-padding---legacy\/16,16px)] py-[var(--gap-\&-padding---legacy\/12,12px)] relative" data-name="table-cell" data-node-id="I2760:53847;2553:5396;2599:42354">
                      <p className="flex-[1_0_0] font-[family-name:var(--family\/content,'Inter:regular',sans-serif)] font-[var(--weight\/body\/regular,normal)] leading-[1.6] min-h-px min-w-px overflow-hidden relative text-[14px] text-[color:var(--color\/fg\/base\/secondary,#3c3f49)] text-ellipsis tracking-[var(--letter-spacing\/body\/sm,-0.25px)] whitespace-nowrap" data-node-id="I2760:53847;2553:5396;2599:42354;1969:85">
                        Jan 21, 2026
                      </p>
                    </div>
                    <div className="border-[length:var(--border,1px)] border-[var(--color\/border\/base,#dbdce1)] border-solid content-stretch flex flex-[1_0_0] gap-[var(--gap-\&-padding---legacy\/8,0px)] h-[56px] items-center justify-center max-h-[56px] min-h-[56px] min-w-px mr-[-1px] overflow-clip px-[var(--gap-\&-padding---legacy\/16,16px)] py-[var(--gap-\&-padding---legacy\/12,12px)] relative" data-name="table-cell" data-node-id="I2760:53847;2553:5396;2599:42355">
                      <div className="content-stretch cursor-pointer flex gap-[var(--spacing\/8,0px)] hover:bg-[#f4f4f6] items-center justify-center max-h-[48px] max-w-[48px] min-h-[48px] min-w-[48px] overflow-clip p-[var(--spacing\/0,0px)] relative rounded-[var(--radius\/8,8px)] shrink-0 size-[48px] transition-colors" data-name="button" data-node-id="I2760:53847;2553:5396;2599:42355;1921:3069">
                        <div className="relative shrink-0 size-[24px]" data-name="Weight=Regular" data-node-id="I2760:53847;2553:5396;2599:42355;1921:3069;322:6981">
                          <div className="absolute inset-[6.25%_37.5%]" data-name="Vector" data-node-id="I2760:53847;2553:5396;2599:42355;1921:3069;322:6981;434:41778">
                            <img alt="" className="absolute block max-w-none size-full" src={imgVector19} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch cursor-pointer flex gap-[var(--spacing\/n1,0px)] hover:bg-[#f0f6ff] items-center mb-[-1px] pr-px relative shrink-0 transition-colors w-full" data-name="row" data-node-id="I2760:53847;2553:5396;2602:42454">
                    <div className="border-[length:var(--border,1px)] border-[var(--color\/border\/base,#dbdce1)] border-solid content-stretch flex flex-[1_0_0] gap-[var(--gap-\&-padding---legacy\/8,0px)] h-[56px] items-center max-h-[56px] min-h-[56px] min-w-px mr-[-1px] overflow-clip px-[var(--gap-\&-padding---legacy\/16,16px)] py-[var(--gap-\&-padding---legacy\/12,12px)] relative" data-name="table-cell" data-node-id="I2760:53847;2553:5396;2602:42455">
                      <div className="content-stretch flex flex-[1_0_0] gap-[var(--space-2,8px)] items-center min-h-px min-w-px relative" data-name=".Avatar" data-node-id="I2760:53847;2553:5396;2602:42455;1900:653">
                        <div className="border border-[var(--color\/border\/base,#dbdce1)] border-solid content-stretch flex flex-col gap-[var(--spacing\/0,0px)] items-start p-[var(--spacing\/0,0px)] relative rounded-[var(--radius\/full,800px)] shrink-0 size-[32px]" data-name="avatar" data-node-id="I2760:53847;2553:5396;2602:42455;1900:654">
                          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[var(--radius\/full,800px)]">
                            <img alt="" className="absolute max-w-none object-cover rounded-[var(--radius\/full,800px)] size-full" src={imgAvatar} />
                            <img alt="" className="absolute max-w-none object-cover rounded-[var(--radius\/full,800px)] size-full" src={imgAvatar2} />
                          </div>
                        </div>
                        <p className="flex-[1_0_0] font-[family-name:var(--family\/content,'Inter:regular',sans-serif)] font-[var(--weight\/body\/regular,normal)] leading-[1.6] min-h-px min-w-px overflow-hidden relative text-[14px] text-[color:var(--color\/fg\/base\/secondary,#3c3f49)] text-ellipsis tracking-[var(--letter-spacing\/body\/sm,-0.25px)] whitespace-nowrap" data-node-id="I2760:53847;2553:5396;2602:42455;1900:655">
                          Emma Johnson
                        </p>
                      </div>
                    </div>
                    <div className="border-[length:var(--border,1px)] border-[var(--color\/border\/base,#dbdce1)] border-solid content-stretch flex flex-[1_0_0] gap-[var(--gap-\&-padding---legacy\/8,0px)] h-[56px] items-center max-h-[56px] min-h-[56px] min-w-px mr-[-1px] overflow-clip px-[var(--gap-\&-padding---legacy\/16,16px)] py-[var(--gap-\&-padding---legacy\/12,12px)] relative" data-name="table-cell" data-node-id="I2760:53847;2553:5396;2602:42456">
                      <div className="bg-[var(--color\/bg\/warning\/light,#fefef1)] content-stretch flex gap-[var(--spacing\/4,4px)] h-[24px] items-center justify-center max-h-[24px] min-h-[24px] opacity-[var(--opacity\/visible,1)] px-[var(--spacing\/8,8px)] py-[var(--spacing\/0,0px)] relative rounded-[var(--radius\/4,4px)] shrink-0" data-name="tag" data-node-id="I2760:53847;2553:5396;2602:42456;1900:1572">
                        <div className="relative shrink-0 size-[12px]" data-name="Weight=Regular" data-node-id="I2760:53847;2553:5396;2602:42456;1900:1572;529:1727">
                          <div className="absolute inset-[6.25%_6.25%_9.38%_6.25%]" data-name="Vector" data-node-id="I2760:53847;2553:5396;2602:42456;1900:1572;529:1727;434:11257">
                            <img alt="" className="absolute block max-w-none size-full" src={imgVector18} />
                          </div>
                        </div>
                        <div className="flex flex-col font-[family-name:var(--family\/content,'Inter:regular',sans-serif)] font-[var(--weight\/body\/regular,normal)] justify-center leading-[0] relative shrink-0 text-[color:var(--color\/fg\/warning\/onlow,#a16207)] text-[length:var(--size\/body\/xs,12px)] text-center tracking-[var(--letter-spacing\/body\/xs,0px)] whitespace-nowrap" data-node-id="I2760:53847;2553:5396;2602:42456;1900:1572;529:1728">
                          <p className="leading-[1.6]">User</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-[length:var(--border,1px)] border-[var(--color\/border\/base,#dbdce1)] border-solid content-stretch flex flex-[1_0_0] gap-[var(--gap-\&-padding---legacy\/8,0px)] h-[56px] items-center max-h-[56px] min-h-[56px] min-w-px mr-[-1px] overflow-clip px-[var(--gap-\&-padding---legacy\/16,16px)] py-[var(--gap-\&-padding---legacy\/12,12px)] relative" data-name="table-cell" data-node-id="I2760:53847;2553:5396;2602:42457">
                      <div className="bg-[var(--color\/bg\/success\/light,#f1fdf5)] content-stretch flex gap-[var(--spacing\/4,4px)] h-[24px] items-center justify-center max-h-[24px] min-h-[24px] opacity-[var(--opacity\/visible,1)] px-[var(--spacing\/8,8px)] py-[var(--spacing\/0,0px)] relative rounded-[var(--radius\/4,4px)] shrink-0" data-name="tag" data-node-id="I2760:53847;2553:5396;2602:42457;1900:1572">
                        <div className="flex flex-col font-[family-name:var(--family\/content,'Inter:regular',sans-serif)] font-[var(--weight\/body\/regular,normal)] justify-center leading-[0] relative shrink-0 text-[color:var(--color\/fg\/success\/onlow,#0b8437)] text-[length:var(--size\/body\/xs,12px)] text-center tracking-[var(--letter-spacing\/body\/xs,0px)] whitespace-nowrap" data-node-id="I2760:53847;2553:5396;2602:42457;1900:1572;524:1644">
                          <p className="leading-[1.6]">Active</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-[length:var(--border,1px)] border-[var(--color\/border\/base,#dbdce1)] border-solid content-stretch flex flex-[1_0_0] gap-[var(--spacing\/4,4px)] h-[56px] items-center max-h-[56px] min-h-[56px] min-w-px mr-[-1px] overflow-clip px-[var(--gap-\&-padding---legacy\/16,16px)] py-[var(--gap-\&-padding---legacy\/12,12px)] relative" data-name="table-cell" data-node-id="I2760:53847;2553:5396;2602:42458">
                      <p className="flex-[1_0_0] font-[family-name:var(--family\/content,'Inter:regular',sans-serif)] font-[var(--weight\/body\/regular,normal)] leading-[1.6] min-h-px min-w-px overflow-hidden relative text-[14px] text-[color:var(--color\/fg\/base\/secondary,#3c3f49)] text-ellipsis tracking-[var(--letter-spacing\/body\/sm,-0.25px)] whitespace-nowrap" data-node-id="I2760:53847;2553:5396;2602:42458;1969:85">
                        Feb 15, 2026
                      </p>
                    </div>
                    <div className="border-[length:var(--border,1px)] border-[var(--color\/border\/base,#dbdce1)] border-solid content-stretch flex flex-[1_0_0] gap-[var(--gap-\&-padding---legacy\/8,0px)] h-[56px] items-center justify-center max-h-[56px] min-h-[56px] min-w-px mr-[-1px] overflow-clip px-[var(--gap-\&-padding---legacy\/16,16px)] py-[var(--gap-\&-padding---legacy\/12,12px)] relative" data-name="table-cell" data-node-id="I2760:53847;2553:5396;2602:42459">
                      <div className="content-stretch cursor-pointer flex gap-[var(--spacing\/8,0px)] hover:bg-[#f4f4f6] items-center justify-center max-h-[48px] max-w-[48px] min-h-[48px] min-w-[48px] overflow-clip p-[var(--spacing\/0,0px)] relative rounded-[var(--radius\/8,8px)] shrink-0 size-[48px] transition-colors" data-name="button" data-node-id="I2760:53847;2553:5396;2602:42459;1921:3069">
                        <div className="relative shrink-0 size-[24px]" data-name="Weight=Regular" data-node-id="I2760:53847;2553:5396;2602:42459;1921:3069;322:6981">
                          <div className="absolute inset-[6.25%_37.5%]" data-name="Vector" data-node-id="I2760:53847;2553:5396;2602:42459;1921:3069;322:6981;434:41778">
                            <img alt="" className="absolute block max-w-none size-full" src={imgVector19} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch cursor-pointer flex gap-[var(--spacing\/n1,0px)] hover:bg-[#f0f6ff] items-center mb-[-1px] pr-px relative shrink-0 transition-colors w-full" data-name="row" data-node-id="I2760:53847;2553:5396;2602:42479">
                    <div className="border-[length:var(--border,1px)] border-[var(--color\/border\/base,#dbdce1)] border-solid content-stretch flex flex-[1_0_0] gap-[var(--gap-\&-padding---legacy\/8,0px)] h-[56px] items-center max-h-[56px] min-h-[56px] min-w-px mr-[-1px] overflow-clip px-[var(--gap-\&-padding---legacy\/16,16px)] py-[var(--gap-\&-padding---legacy\/12,12px)] relative" data-name="table-cell" data-node-id="I2760:53847;2553:5396;2602:42480">
                      <div className="content-stretch flex flex-[1_0_0] gap-[var(--space-2,8px)] items-center min-h-px min-w-px relative" data-name=".Avatar" data-node-id="I2760:53847;2553:5396;2602:42480;1900:653">
                        <div className="border border-[var(--color\/border\/base,#dbdce1)] border-solid content-stretch flex flex-col gap-[var(--spacing\/0,0px)] items-start p-[var(--spacing\/0,0px)] relative rounded-[var(--radius\/full,800px)] shrink-0 size-[32px]" data-name="avatar" data-node-id="I2760:53847;2553:5396;2602:42480;1900:654">
                          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[var(--radius\/full,800px)]">
                            <img alt="" className="absolute max-w-none object-cover rounded-[var(--radius\/full,800px)] size-full" src={imgAvatar} />
                            <img alt="" className="absolute max-w-none object-cover rounded-[var(--radius\/full,800px)] size-full" src={imgAvatar2} />
                          </div>
                        </div>
                        <p className="flex-[1_0_0] font-[family-name:var(--family\/content,'Inter:regular',sans-serif)] font-[var(--weight\/body\/regular,normal)] leading-[1.6] min-h-px min-w-px overflow-hidden relative text-[14px] text-[color:var(--color\/fg\/base\/secondary,#3c3f49)] text-ellipsis tracking-[var(--letter-spacing\/body\/sm,-0.25px)] whitespace-nowrap" data-node-id="I2760:53847;2553:5396;2602:42480;1900:655">
                          Michael Brown
                        </p>
                      </div>
                    </div>
                    <div className="border-[length:var(--border,1px)] border-[var(--color\/border\/base,#dbdce1)] border-solid content-stretch flex flex-[1_0_0] gap-[var(--gap-\&-padding---legacy\/8,0px)] h-[56px] items-center max-h-[56px] min-h-[56px] min-w-px mr-[-1px] overflow-clip px-[var(--gap-\&-padding---legacy\/16,16px)] py-[var(--gap-\&-padding---legacy\/12,12px)] relative" data-name="table-cell" data-node-id="I2760:53847;2553:5396;2602:42481">
                      <div className="bg-[var(--color\/bg\/warning\/light,#fefef1)] content-stretch flex gap-[var(--spacing\/4,4px)] h-[24px] items-center justify-center max-h-[24px] min-h-[24px] opacity-[var(--opacity\/visible,1)] px-[var(--spacing\/8,8px)] py-[var(--spacing\/0,0px)] relative rounded-[var(--radius\/4,4px)] shrink-0" data-name="tag" data-node-id="I2760:53847;2553:5396;2602:42481;1900:1572">
                        <div className="relative shrink-0 size-[12px]" data-name="Weight=Regular" data-node-id="I2760:53847;2553:5396;2602:42481;1900:1572;529:1727">
                          <div className="absolute inset-[6.25%_6.25%_9.38%_6.25%]" data-name="Vector" data-node-id="I2760:53847;2553:5396;2602:42481;1900:1572;529:1727;434:11257">
                            <img alt="" className="absolute block max-w-none size-full" src={imgVector18} />
                          </div>
                        </div>
                        <div className="flex flex-col font-[family-name:var(--family\/content,'Inter:regular',sans-serif)] font-[var(--weight\/body\/regular,normal)] justify-center leading-[0] relative shrink-0 text-[color:var(--color\/fg\/warning\/onlow,#a16207)] text-[length:var(--size\/body\/xs,12px)] text-center tracking-[var(--letter-spacing\/body\/xs,0px)] whitespace-nowrap" data-node-id="I2760:53847;2553:5396;2602:42481;1900:1572;529:1728">
                          <p className="leading-[1.6]">Moderator</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-[length:var(--border,1px)] border-[var(--color\/border\/base,#dbdce1)] border-solid content-stretch flex flex-[1_0_0] gap-[var(--gap-\&-padding---legacy\/8,0px)] h-[56px] items-center max-h-[56px] min-h-[56px] min-w-px mr-[-1px] overflow-clip px-[var(--gap-\&-padding---legacy\/16,16px)] py-[var(--gap-\&-padding---legacy\/12,12px)] relative" data-name="table-cell" data-node-id="I2760:53847;2553:5396;2602:42482">
                      <div className="bg-[var(--color\/bg\/base\/tertiary,#dbdce1)] content-stretch flex gap-[var(--spacing\/4,4px)] h-[24px] items-center justify-center max-h-[24px] min-h-[24px] opacity-[var(--opacity\/visible,1)] px-[var(--spacing\/8,8px)] py-[var(--spacing\/0,0px)] relative rounded-[var(--radius\/4,4px)] shrink-0" data-name="tag" data-node-id="I2760:53847;2553:5396;2602:42482;1900:1572">
                        <div className="flex flex-col font-[family-name:var(--family\/content,'Inter:regular',sans-serif)] font-[var(--weight\/body\/regular,normal)] justify-center leading-[0] relative shrink-0 text-[color:var(--color\/fg\/base\/tertiary,#4e535f)] text-[length:var(--size\/body\/xs,12px)] text-center tracking-[var(--letter-spacing\/body\/xs,0px)] whitespace-nowrap" data-node-id="I2760:53847;2553:5396;2602:42482;1900:1572;545:5013">
                          <p className="leading-[1.6]">Pending</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-[length:var(--border,1px)] border-[var(--color\/border\/base,#dbdce1)] border-solid content-stretch flex flex-[1_0_0] gap-[var(--spacing\/4,4px)] h-[56px] items-center max-h-[56px] min-h-[56px] min-w-px mr-[-1px] overflow-clip px-[var(--gap-\&-padding---legacy\/16,16px)] py-[var(--gap-\&-padding---legacy\/12,12px)] relative" data-name="table-cell" data-node-id="I2760:53847;2553:5396;2602:42483">
                      <p className="flex-[1_0_0] font-[family-name:var(--family\/content,'Inter:regular',sans-serif)] font-[var(--weight\/body\/regular,normal)] leading-[1.6] min-h-px min-w-px overflow-hidden relative text-[14px] text-[color:var(--color\/fg\/base\/secondary,#3c3f49)] text-ellipsis tracking-[var(--letter-spacing\/body\/sm,-0.25px)] whitespace-nowrap" data-node-id="I2760:53847;2553:5396;2602:42483;1969:85">
                        Mar 10, 2026
                      </p>
                    </div>
                    <div className="border-[length:var(--border,1px)] border-[var(--color\/border\/base,#dbdce1)] border-solid content-stretch flex flex-[1_0_0] gap-[var(--gap-\&-padding---legacy\/8,0px)] h-[56px] items-center justify-center max-h-[56px] min-h-[56px] min-w-px mr-[-1px] overflow-clip px-[var(--gap-\&-padding---legacy\/16,16px)] py-[var(--gap-\&-padding---legacy\/12,12px)] relative" data-name="table-cell" data-node-id="I2760:53847;2553:5396;2602:42484">
                      <div className="content-stretch cursor-pointer flex gap-[var(--spacing\/8,0px)] hover:bg-[#f4f4f6] items-center justify-center max-h-[48px] max-w-[48px] min-h-[48px] min-w-[48px] overflow-clip p-[var(--spacing\/0,0px)] relative rounded-[var(--radius\/8,8px)] shrink-0 size-[48px] transition-colors" data-name="button" data-node-id="I2760:53847;2553:5396;2602:42484;1921:3069">
                        <div className="relative shrink-0 size-[24px]" data-name="Weight=Regular" data-node-id="I2760:53847;2553:5396;2602:42484;1921:3069;322:6981">
                          <div className="absolute inset-[6.25%_37.5%]" data-name="Vector" data-node-id="I2760:53847;2553:5396;2602:42484;1921:3069;322:6981;434:41778">
                            <img alt="" className="absolute block max-w-none size-full" src={imgVector19} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch cursor-pointer flex gap-[var(--spacing\/n1,0px)] hover:bg-[#f0f6ff] items-center mb-[-1px] pr-px relative shrink-0 transition-colors w-full" data-name="row" data-node-id="I2760:53847;2553:5396;2602:42504">
                    <div className="border-[length:var(--border,1px)] border-[var(--color\/border\/base,#dbdce1)] border-solid content-stretch flex flex-[1_0_0] gap-[var(--gap-\&-padding---legacy\/8,0px)] h-[56px] items-center max-h-[56px] min-h-[56px] min-w-px mr-[-1px] overflow-clip px-[var(--gap-\&-padding---legacy\/16,16px)] py-[var(--gap-\&-padding---legacy\/12,12px)] relative" data-name="table-cell" data-node-id="I2760:53847;2553:5396;2602:42505">
                      <div className="content-stretch flex flex-[1_0_0] gap-[var(--space-2,8px)] items-center min-h-px min-w-px relative" data-name=".Avatar" data-node-id="I2760:53847;2553:5396;2602:42505;1900:653">
                        <div className="border border-[var(--color\/border\/base,#dbdce1)] border-solid content-stretch flex flex-col gap-[var(--spacing\/0,0px)] items-start p-[var(--spacing\/0,0px)] relative rounded-[var(--radius\/full,800px)] shrink-0 size-[32px]" data-name="avatar" data-node-id="I2760:53847;2553:5396;2602:42505;1900:654">
                          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[var(--radius\/full,800px)]">
                            <img alt="" className="absolute max-w-none object-cover rounded-[var(--radius\/full,800px)] size-full" src={imgAvatar} />
                            <img alt="" className="absolute max-w-none object-cover rounded-[var(--radius\/full,800px)] size-full" src={imgAvatar2} />
                          </div>
                        </div>
                        <p className="flex-[1_0_0] font-[family-name:var(--family\/content,'Inter:regular',sans-serif)] font-[var(--weight\/body\/regular,normal)] leading-[1.6] min-h-px min-w-px overflow-hidden relative text-[14px] text-[color:var(--color\/fg\/base\/secondary,#3c3f49)] text-ellipsis tracking-[var(--letter-spacing\/body\/sm,-0.25px)] whitespace-nowrap" data-node-id="I2760:53847;2553:5396;2602:42505;1900:655">
                          Sophia Davis
                        </p>
                      </div>
                    </div>
                    <div className="border-[length:var(--border,1px)] border-[var(--color\/border\/base,#dbdce1)] border-solid content-stretch flex flex-[1_0_0] gap-[var(--gap-\&-padding---legacy\/8,0px)] h-[56px] items-center max-h-[56px] min-h-[56px] min-w-px mr-[-1px] overflow-clip px-[var(--gap-\&-padding---legacy\/16,16px)] py-[var(--gap-\&-padding---legacy\/12,12px)] relative" data-name="table-cell" data-node-id="I2760:53847;2553:5396;2602:42506">
                      <div className="bg-[var(--color\/bg\/warning\/light,#fefef1)] content-stretch flex gap-[var(--spacing\/4,4px)] h-[24px] items-center justify-center max-h-[24px] min-h-[24px] opacity-[var(--opacity\/visible,1)] px-[var(--spacing\/8,8px)] py-[var(--spacing\/0,0px)] relative rounded-[var(--radius\/4,4px)] shrink-0" data-name="tag" data-node-id="I2760:53847;2553:5396;2602:42506;1900:1572">
                        <div className="relative shrink-0 size-[12px]" data-name="Weight=Regular" data-node-id="I2760:53847;2553:5396;2602:42506;1900:1572;529:1727">
                          <div className="absolute inset-[6.25%_6.25%_9.38%_6.25%]" data-name="Vector" data-node-id="I2760:53847;2553:5396;2602:42506;1900:1572;529:1727;434:11257">
                            <img alt="" className="absolute block max-w-none size-full" src={imgVector18} />
                          </div>
                        </div>
                        <div className="flex flex-col font-[family-name:var(--family\/content,'Inter:regular',sans-serif)] font-[var(--weight\/body\/regular,normal)] justify-center leading-[0] relative shrink-0 text-[color:var(--color\/fg\/warning\/onlow,#a16207)] text-[length:var(--size\/body\/xs,12px)] text-center tracking-[var(--letter-spacing\/body\/xs,0px)] whitespace-nowrap" data-node-id="I2760:53847;2553:5396;2602:42506;1900:1572;529:1728">
                          <p className="leading-[1.6]">User</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-[length:var(--border,1px)] border-[var(--color\/border\/base,#dbdce1)] border-solid content-stretch flex flex-[1_0_0] gap-[var(--gap-\&-padding---legacy\/8,0px)] h-[56px] items-center max-h-[56px] min-h-[56px] min-w-px mr-[-1px] overflow-clip px-[var(--gap-\&-padding---legacy\/16,16px)] py-[var(--gap-\&-padding---legacy\/12,12px)] relative" data-name="table-cell" data-node-id="I2760:53847;2553:5396;2602:42507">
                      <div className="bg-[var(--color\/bg\/success\/light,#f1fdf5)] content-stretch flex gap-[var(--spacing\/4,4px)] h-[24px] items-center justify-center max-h-[24px] min-h-[24px] opacity-[var(--opacity\/visible,1)] px-[var(--spacing\/8,8px)] py-[var(--spacing\/0,0px)] relative rounded-[var(--radius\/4,4px)] shrink-0" data-name="tag" data-node-id="I2760:53847;2553:5396;2602:42507;1900:1572">
                        <div className="flex flex-col font-[family-name:var(--family\/content,'Inter:regular',sans-serif)] font-[var(--weight\/body\/regular,normal)] justify-center leading-[0] relative shrink-0 text-[color:var(--color\/fg\/success\/onlow,#0b8437)] text-[length:var(--size\/body\/xs,12px)] text-center tracking-[var(--letter-spacing\/body\/xs,0px)] whitespace-nowrap" data-node-id="I2760:53847;2553:5396;2602:42507;1900:1572;524:1644">
                          <p className="leading-[1.6]">Active</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-[length:var(--border,1px)] border-[var(--color\/border\/base,#dbdce1)] border-solid content-stretch flex flex-[1_0_0] gap-[var(--spacing\/4,4px)] h-[56px] items-center max-h-[56px] min-h-[56px] min-w-px mr-[-1px] overflow-clip px-[var(--gap-\&-padding---legacy\/16,16px)] py-[var(--gap-\&-padding---legacy\/12,12px)] relative" data-name="table-cell" data-node-id="I2760:53847;2553:5396;2602:42508">
                      <p className="flex-[1_0_0] font-[family-name:var(--family\/content,'Inter:regular',sans-serif)] font-[var(--weight\/body\/regular,normal)] leading-[1.6] min-h-px min-w-px overflow-hidden relative text-[14px] text-[color:var(--color\/fg\/base\/secondary,#3c3f49)] text-ellipsis tracking-[var(--letter-spacing\/body\/sm,-0.25px)] whitespace-nowrap" data-node-id="I2760:53847;2553:5396;2602:42508;1969:85">
                        Apr 25, 2026
                      </p>
                    </div>
                    <div className="border-[length:var(--border,1px)] border-[var(--color\/border\/base,#dbdce1)] border-solid content-stretch flex flex-[1_0_0] gap-[var(--gap-\&-padding---legacy\/8,0px)] h-[56px] items-center justify-center max-h-[56px] min-h-[56px] min-w-px mr-[-1px] overflow-clip px-[var(--gap-\&-padding---legacy\/16,16px)] py-[var(--gap-\&-padding---legacy\/12,12px)] relative" data-name="table-cell" data-node-id="I2760:53847;2553:5396;2602:42509">
                      <div className="content-stretch cursor-pointer flex gap-[var(--spacing\/8,0px)] hover:bg-[#f4f4f6] items-center justify-center max-h-[48px] max-w-[48px] min-h-[48px] min-w-[48px] overflow-clip p-[var(--spacing\/0,0px)] relative rounded-[var(--radius\/8,8px)] shrink-0 size-[48px] transition-colors" data-name="button" data-node-id="I2760:53847;2553:5396;2602:42509;1921:3069">
                        <div className="relative shrink-0 size-[24px]" data-name="Weight=Regular" data-node-id="I2760:53847;2553:5396;2602:42509;1921:3069;322:6981">
                          <div className="absolute inset-[6.25%_37.5%]" data-name="Vector" data-node-id="I2760:53847;2553:5396;2602:42509;1921:3069;322:6981;434:41778">
                            <img alt="" className="absolute block max-w-none size-full" src={imgVector19} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
