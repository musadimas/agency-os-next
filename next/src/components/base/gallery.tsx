"use client";

import { Button, Kbd, Modal, ModalBody, ModalContent, Popover, PopoverContent, PopoverTrigger, useDisclosure } from "@nextui-org/react";
import React, { useState } from "react";

import { useFiles } from "@/hooks";
import { File } from "@/types";

export default function Gallery(props: { items: File[] }) {
  const { fileUrl } = useFiles();
  const [currentItemIdx, setCurrentItemIdx] = useState<number>(0);
  const modal = useDisclosure();

  function next() {
    // If the current item is the last item, go back to the first item
    setCurrentItemIdx(currentItemIdx === props.items.length - 1 ? 0 : currentItemIdx + 1);
  }

  function prev() {
    // If the current item is the first item, go to the last item
    setCurrentItemIdx(currentItemIdx === 0 ? props.items.length - 1 : currentItemIdx - 1);
  }

  // Add keyboard navigation
  function onKeydown(e: React.KeyboardEvent<HTMLElement>) {
    if (!modal.isOpen) return;

    if (e.key === "Escape") {
      modal.onOpenChange();
    }

    if (e.key === "ArrowRight") {
      next();
    }

    if (e.key === "ArrowLeft") {
      prev();
    }
  }

  return (
    <>
      <div className='gap-4 mt-4 md:columns-3'>
        {props.items.map((item, i) => (
          <button
            key={item.id}
            className='block relative w-full mb-6 overflow-hidden border dark:border-gray-700 rounded-card focus:outline-none'
            onClick={() => {
              setCurrentItemIdx(i);
              modal.onOpen();
            }}
          >
            <div className='relative block w-full overflow-hidden rounded-card group'>
              <img src={fileUrl(item.id)} alt={item.description ?? ""} className='object-cover w-full transition duration-300 group-hover:scale-110' />

              <div className='absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-white bg-opacity-75 opacity-0 hover:opacity-100 dark:bg-gray-900 dark:bg-opacity-75'>Open</div>
            </div>
          </button>
        ))}
      </div>

      <Modal isOpen={modal.isOpen} onOpenChange={modal.onOpenChange} size='full' hideCloseButton backdrop='opaque' onKeyDown={onKeydown}>
        <ModalContent className='overflow-hidden bg-transparent max-w-7xl'>
          {(onClose) => (
            <>
              <ModalBody className=' lg:!px-20 md:!px-10 px-5 !pt-0 relative h-full'>
                <Button className='absolute top-1/2 left-0 -translate-y-1/2 z-[100]' onClick={prev}>
                  Prev
                </Button>
                <Button className='absolute top-1/2 right-0 -translate-y-1/2 z-[100]' onClick={prev}>
                  Next
                </Button>
                <div className='absolute z-[100] top-0 gap-2 text-white bg-opacity-75 item-center left-0 flex justify-between w-full mt-5'>
                  <Popover placement='right'>
                    <PopoverTrigger>
                      <Button>Help</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <div className='px-1 py-2 space-y-4 text-sm'>
                        <div>
                          Press <Kbd>ESC</Kbd> to close
                        </div>
                        <div>
                          Press <Kbd keys={["left"]} /> or <Kbd keys={["right"]} /> to navigate
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                  <Button onClick={onClose}>Close</Button>
                </div>
                <div className='relative h-full'>
                  <div className='flex flex-col items-center justify-center w-full h-full px-20 mx-auto relative'>
                    {props.items && props.items.length > 0 && props.items[currentItemIdx]?.description && <p className='inline-block px-6 py-2 text-sm text-white bg-gray-900 rounded-t-xl'>{props.items[currentItemIdx].description}</p>}
                    {props.items.map((item, i) => (
                      <img src={fileUrl(item.id)} alt={item.description ?? ""} key={i} hidden={currentItemIdx !== i} className='object-contain w-full h-auto max-h-fit rounded-card' />
                    ))}
                    70
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
