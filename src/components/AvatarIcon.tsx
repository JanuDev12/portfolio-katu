
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

function AvatarIcon() {
  return (
    <>
      <div className="">
        <Avatar className="size-[70px] ">
          <AvatarImage
            src="https://pbs.twimg.com/media/GSHjbB1WAAA4BVI?format=jpg&name=large"
            alt="Katu"
          />
          <AvatarFallback>KT</AvatarFallback>
        </Avatar>
        <div className="mt-3 flex flex-col font-proxima ">
          <span className="text-2xl font-semibold text-black tracking-wide">
            Katu{" "}
          </span>
          <span className="text-sm font-semibold text-gray-500 tracking-tight ">
            storyboard/bg artist
          </span>
          {/* <span className="text-xs font-medium text-gray-500 tracking-tighter">
            background artist
          </span> */}
        </div>
      </div>
    </>
  );
}

export default AvatarIcon