
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

function AvatarIcon() {
  return (
    <>
      <Avatar className="size-32 ">
        <AvatarImage
          src="https://pbs.twimg.com/media/GSHjbB1WAAA4BVI?format=jpg&name=large"
          alt="Katu"
        />
        <AvatarFallback>KT</AvatarFallback>
      </Avatar>
      <div className="mt-2 ">
        <span className="text-3xl font-light">Val Katu</span>
      </div>
    </>
  );
}

export default AvatarIcon