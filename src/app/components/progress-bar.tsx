export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="absolute bottom-0 w-full h-[5px] bg-black/20">
      <div
        className={` bg-accent h-full w-[${progress}%]`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
