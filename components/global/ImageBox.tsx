import Image from "next/image";
import { Button, ListItem } from "@/components";
import { ListItemProps } from "./ListItem";
import { ButtonProps } from "./Button";
import { ReactNode } from "react";

export interface ImageBoxProps extends ListItemProps, ButtonProps {
  imageSrc?: string;
  label?: string;
  imgSectionTitle?: string;
  titleSize?: "sm" | "lg" | "xl";
  imageSize?: "sm" | "lg" | "xl";
  light?: boolean;
  alignment?: "bottom" | "top" | "center";
  imageBorder?: boolean;
  button?: boolean;
  titleBorder?: boolean;
  imgSectionText?: string | ReactNode;
  reverse?: boolean;
  listItems?: ListItemProps[];
}

const ImageBox: React.FC<ImageBoxProps> = ({
  imageSrc,
  imageBorder,
  titleBorder,
  alignment,
  imageSize,
  titleSize,
  light,
  icon,
  lg,
  button,
  text,
  filled,
  white,
  imgSectionTitle,
  title,
  imgSectionText,
  reverse,
  listItems,
}) => {
  return (
    <section className="flex w-full justify-center transition-all duration-500 ease-in-out hover:bg-opacity-80 md:px-16 xl:px-16 lg:gap-y-12 pt-20">
      <div
        className={`max-w-[1440px] w-full ${
          alignment == "bottom"
            ? "lg:items-end"
            : alignment == "top"
            ? "lg:items-start"
            : alignment == "center"
            && "lg:items-center"
        } flex justify-between gap-x-10 flex-col lg:flex-row ${
          reverse && "lg:flex-row-reverse md:text-right"
        }`}
      >
        <article className="flex flex-col justify-center w-full lg:w-[55%] gap-y-3 md:gap-y-14">
          <div className="flex flex-col gap-y-10 w-full lg:w-full">
            <section
              className={`flex items-center gap-x-4 ${
                reverse && "lg:flex-row-reverse"
              }`}
            >
              {titleBorder && (
                <div className="w-[24px] h-[62px] bg-[#F8B51C]"></div>
              )}

              <h3
                className={`${light ? "text-white" : "text-[#212121]"} ${
                  titleSize == "sm"
                    ? "text-[26px]"
                    : titleSize == "lg"
                    ? "text-[22px] md:text-[36px]"
                    : titleSize == "xl"
                    ? "text-[22px] md:text-[56px]"
                    : "text-[22px] md:text-[32px]"
                } ${reverse ? "lg:pl-5" : "lg:pr-5"} font-bold leading-tight`}
              >
                {imgSectionTitle}
              </h3>
            </section>

            <p
              className={`text-lg w-full md:text-xl md:leading-relaxed ${
                light ? "text-white" : "text-[#212121]"
              }`}
            >
              {imgSectionText}
            </p>

            <div className="pt-5">
              {button && (
                <Button
                  text={text}
                  filled={filled}
                  white={white}
                  icon={icon}
                  lg={lg}
                />
              )}
            </div>
          </div>

          <div
            className={`flex flex-col ${
              imageSrc && title ? "gap-y-16" : "gap-y-10"
            }`}
          >
            {listItems &&
              listItems.map((item, index) => (
                <ListItem
                  key={index}
                  title={item.title}
                  description={item.description}
                  icon={
                    !item.icon ? (
                      <div className="h-10 w-10 flex justify-center items-center md:text-xl rounded-full bg-[#D8F0AE]">
                        {index + 1}
                      </div>
                    ) : (
                      item.icon
                    )
                  }
                  gap
                />
              ))}
          </div>
        </article>

        <div
          className={`${
            imageSize == "sm"
              ? "h-full lg:h-[640px] w-full lg:w-[550px]"
              : imageSize == "lg"
              ? "md:h-[550px] w-full mb-10 md:mb-0 pr-5 md:pr-0 lg:w-[65%]"
              : "lg:h-[400px] h-fit w-full lg:w-[500px]"
          } flex`}
        >
          {imageSrc && (
            <div className="w-full h-full relative">
              {imageBorder && (
                <div className="w-[50%] lg:w-[304px] h-[150px] md:h-[279px] bg-[#F8B51C]"></div>
              )}
              <Image
                width={1000}
                height={1000}
                src={imageSrc}
                alt="Section image"
                className={imageBorder ? "absolute w-full h-fit md:h-full bg-cover top-3 left-3 object-cover" : ""}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageBox;
