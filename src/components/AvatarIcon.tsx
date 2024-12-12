
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

function AvatarIcon() {
  return (
    <>
      <Avatar className="size-28 ">
        <AvatarImage
          src="https://pbs.twimg.com/media/GSHjbB1WAAA4BVI?format=jpg&name=large"
          alt="Katu"
        />
        <AvatarFallback>KT</AvatarFallback>
      </Avatar>
      <div className="mt-4 flex flex-col  font-proxima ">
        <span className="text-2xl font-medium uppercase">Katu</span>
        <span className="text-xs font-semibold">Storyboard artist</span>
      </div>
    </>
  );
}

export default AvatarIcon