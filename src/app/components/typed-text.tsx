export default function TypedText({ typedText }: { typedText: string }) {
  return (
    <div
      className={`absolute top-0 left-0 w-1/2 h-full bg-[rgba(159,158,168,0.5)] flex items-center justify-end overflow-hidden `}
    >
      <p className="typed-text z-10 text-[50px] font-normal whitespace-nowrap transition-transform duration-300 text-inherit opacity-[60%]">
        {typedText}
      </p>
    </div>
  );
}
