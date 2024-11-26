
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
      <div className="mt-2">
        <span className="text-3xl font-thin text-red-700 leading-loose uppercase font-geist ">Katu Kint</span>
      </div>
    </>
  );
}

export default AvatarIcon