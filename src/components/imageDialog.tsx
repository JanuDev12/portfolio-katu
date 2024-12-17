import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from './ui/Dialog';
import { cn } from '@/lib/utils';

const imageDialog: React.FC<{img: string, imgID?: number, className?: string}> = ({img, imgID, className}) =>  {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="h-full w-full">
          <img
            className="w-full h-full object-contain"
            src={img}
            alt={imgID.toString()}
          />
        </div>
      </DialogTrigger>
      <DialogContent className={cn("p-0 border-0", className)} >
        <div className="w-full h-full">
          <img
            className="w-full h-full object-contain"
            src={img}
            alt={imgID.toString()}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default imageDialog