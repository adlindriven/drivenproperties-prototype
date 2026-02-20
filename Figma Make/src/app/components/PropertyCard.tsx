import { useState } from 'react';

interface PropertyCardProps {
  image: string;
  title: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  location: string;
  developer: string;
  monthlyPrice: string;
  totalPrice: string;
  agentName: string;
  agentImage: string;
  has3D?: boolean;
  hasVideo?: boolean;
}

export function PropertyCard({
  image,
  title,
  bedrooms,
  bathrooms,
  area,
  location,
  developer,
  monthlyPrice,
  totalPrice,
  agentName,
  agentImage,
  has3D = false,
  hasVideo = false,
}: PropertyCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div
      className="rounded-[32px] border p-[12px] transition-all duration-300 ease-in-out cursor-pointer"
      style={{
        background: isHovered ? '#F1EBE1' : '#FFFFFF',
        borderColor: isHovered ? '#887860' : '#ebebe2',
        boxShadow: isHovered
          ? '-18px 51px 15px rgba(217, 217, 217, 0.01), -11px 33px 14px rgba(217, 217, 217, 0.1), -6px 18px 12px rgba(217, 217, 217, 0.33), -3px 8px 9px rgba(217, 217, 217, 0.56), -1px 2px 5px rgba(217, 217, 217, 0.64)'
          : '0 0 0 0 rgba(0, 0, 0, 0)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col gap-[12px]">
        {/* Property Image */}
        <div className="relative h-[220px] rounded-[16px] overflow-hidden group">
          <img
            alt={title}
            className="w-full h-full object-cover"
            src={image}
          />
          <div 
            className="absolute inset-0 rounded-[16px] pointer-events-none transition-colors duration-300"
            style={{
              border: isHovered ? '1px solid #E1C8A4' : '1px solid #f8f7f4',
            }}
          />

          {/* Tags - Bottom Left */}
          <div className="absolute bottom-[8px] left-[8px] flex gap-[8px]">
            {has3D && (
              <div className="bg-[rgba(75,75,75,0.51)] border border-[rgba(88,88,88,0.33)] px-[8px] py-[4px] rounded-[8px] flex items-center gap-[8px]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect width="20" height="20" fill="white" opacity="0.2" />
                </svg>
                <span className="font-['Lato:Regular',sans-serif] text-[#fbfbfb] text-[12px]">3D</span>
              </div>
            )}
            {hasVideo && (
              <div className="bg-[rgba(75,75,75,0.51)] border border-[rgba(88,88,88,0.33)] px-[8px] py-[4px] rounded-[8px] flex items-center gap-[8px]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect width="20" height="20" fill="white" opacity="0.2" />
                </svg>
                <span className="font-['Lato:Regular',sans-serif] text-[#fbfbfb] text-[12px]">Video</span>
              </div>
            )}
          </div>

          {/* Heart - Top Right */}
          <button
            className="absolute top-[8px] right-[8px] w-[44px] h-[44px] rounded-[20px] flex items-center justify-center transition-all duration-300"
            style={{
              background: 'rgba(255, 255, 255, 0.85)',
              border: '1px solid #877861',
              filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
            }}
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
          >
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
              <path
                d="M10 17.5L8.55 16.18C3.4 11.54 0 8.48 0 4.75C0 2.09 2.09 0 4.75 0C6.28 0 7.75 0.68 8.75 1.75H11.25C12.25 0.68 13.72 0 15.25 0C17.91 0 20 2.09 20 4.75C20 8.48 16.6 11.54 11.45 16.18L10 17.5Z"
                fill={isLiked ? '#E94B3C' : 'white'}
                stroke={isLiked ? '#E94B3C' : '#D1D1D1'}
                strokeWidth="1"
              />
            </svg>
          </button>

          {/* Navigation Arrows - Visible on Hover */}
          <div
            className="absolute inset-0 flex items-center justify-between px-[9px] pointer-events-none transition-opacity duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
            }}
          >
            <button className="bg-[rgba(111,110,110,0.43)] border-[0.476px] border-[#b1b1ab] p-[9px] rounded-[20px] size-[32px] flex items-center justify-center pointer-events-auto hover:bg-[rgba(111,110,110,0.6)] transition-colors">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                <path d="M12 4L7 9.5L12 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="bg-[rgba(111,110,110,0.43)] border-[0.476px] border-[#b1b1ab] p-[9px] rounded-[20px] size-[32px] flex items-center justify-center pointer-events-auto hover:bg-[rgba(111,110,110,0.6)] transition-colors">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                <path d="M7 4L12 9.5L7 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Details Container */}
        <div className="px-[8px] flex flex-col gap-[8px]">
          {/* Title */}
          <div className="px-[12px] flex flex-col gap-[16px]">
            <p className="font-['Lato:Bold',sans-serif] text-[#1c1c1a] text-[16px] leading-[20px]">{title}</p>

            {/* Icons Container */}
            <div className="flex gap-[8px] items-center">
              <div className="flex gap-[10px] items-center min-w-[60px]">
                <div className="w-[20px] h-[20px] relative" style={{ opacity: 0.72 }}>
                  <div 
                    className="absolute w-[16px] h-[14px] left-[calc(50%-8px)] top-[calc(50%-7px)] transition-colors duration-300"
                    style={{ background: isHovered ? '#A49075' : '#B1B1AB' }}
                  />
                </div>
                <span className="font-['Lato:Bold',sans-serif] text-[#1c1c1a] text-[16px] leading-[20px]">{bedrooms}</span>
              </div>
              <div 
                className="h-full w-px rounded-[8px] transition-colors duration-300"
                style={{ background: isHovered ? '#E1C8A4' : '#f8f7f4' }}
              />
              <div className="flex gap-[10px] items-center min-w-[60px]">
                <div className="w-[20px] h-[20px] relative" style={{ opacity: 0.72 }}>
                  <div 
                    className="absolute w-[16px] h-[16px] left-[calc(50%-8px)] top-[calc(50%-8px)] transition-colors duration-300"
                    style={{ background: isHovered ? '#A49075' : '#B1B1AB' }}
                  />
                </div>
                <span className="font-['Lato:Bold',sans-serif] text-[#1c1c1a] text-[16px] leading-[20px]">{bathrooms}</span>
              </div>
              <div 
                className="h-full w-px rounded-[8px] transition-colors duration-300"
                style={{ background: isHovered ? '#E1C8A4' : '#f8f7f4' }}
              />
              <div className="flex gap-[10px] items-center min-w-[60px]">
                <div className="w-[20px] h-[20px] relative" style={{ opacity: 0.72 }}>
                  <div 
                    className="absolute w-[16px] h-[12px] left-[calc(50%-8px)] top-[calc(50%-6px)] transition-colors duration-300"
                    style={{ background: isHovered ? '#A49075' : '#B1B1AB' }}
                  />
                </div>
                <span className="font-['Lato:Bold',sans-serif] text-[#1c1c1a] text-[16px] leading-[20px]">{area}</span>
              </div>
            </div>
          </div>

          {/* Location Container */}
          <div 
            className="rounded-[6px] px-[12px] py-[8px] transition-all duration-300"
            style={{
              background: isHovered ? '#FFFBF6' : '#f8f7f4',
              borderTop: isHovered ? '1px solid #C4AD8D' : '1px solid #ebebe2',
              borderBottom: isHovered ? '1px solid #C4AD8D' : '1px solid #ebebe2',
            }}
          >
            <div className="flex gap-[10px] items-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" opacity="0.72">
                <rect width="20" height="20" fill="#7C7C78" />
              </svg>
              <div className="flex-1 flex flex-col gap-[4px]">
                <p className="font-['Lato:Bold',sans-serif] text-[#7c7c78] text-[16px] leading-[20px]">{developer}</p>
                <p className="font-['Lato:Bold',sans-serif] text-[#7c7c78] text-[16px] leading-[20px]">{location}</p>
              </div>
            </div>
          </div>

          {/* Price Container */}
          <div 
            className="rounded-[6px] px-[16px] py-[8px] flex items-end justify-between transition-colors duration-300"
            style={{
              background: isHovered ? '#FFFBF6' : '#f8f7f4',
            }}
          >
            <div 
              className="px-[8px] py-[8px] rounded-[14px] flex gap-[4px] items-center transition-colors duration-300"
              style={{
                background: isHovered ? 'rgba(225, 200, 164, 0.34)' : '#ebebe2',
              }}
            >
              <span className="text-[14px]">AED</span>
              <span className="font-['Lato:SemiBold',sans-serif] text-[#1c1c1a] text-[14px] leading-[24px]">{monthlyPrice}/month*</span>
            </div>
            <div className="flex gap-[8px] items-center">
              <span className="text-[17px]">AED</span>
              <span className="font-['Lato:ExtraBold',sans-serif] text-[#1c1c1a] text-[20px] leading-[24px]">{totalPrice}</span>
            </div>
          </div>

          {/* Agent Container */}
          <div 
            className="pt-[8px] flex items-center justify-between transition-colors duration-300"
            style={{
              borderTop: isHovered ? '1px solid #E1C8A4' : '1px solid #f8f7f4',
            }}
          >
            <div className="flex gap-[8px] items-center flex-1">
              <img
                alt={agentName}
                className="w-[40px] h-[40px] rounded-full object-cover transition-all duration-300"
                src={agentImage}
                style={{
                  border: isHovered ? '1.6px solid #E1C8A4' : '1.6px solid transparent',
                }}
              />
              <div className="flex flex-col gap-[6px]">
                <p className="font-['Lato:Regular',sans-serif] text-[#7c7c78] text-[14px] leading-[18px]">Listed By</p>
                <p className="font-['Lato:Bold',sans-serif] text-[#1c1c1a] text-[14px] overflow-hidden text-ellipsis whitespace-nowrap">{agentName}</p>
              </div>
            </div>

            {/* Contact Icons */}
            <div className="flex gap-[11px] items-center">
              <button className="w-[56px] h-[56px] rounded-[13px] overflow-hidden hover:scale-105 transition-transform bg-gray-100 flex items-center justify-center">
                <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
                  <rect width="46" height="46" fill="#7C7C78" />
                </svg>
              </button>
              <div 
                className="h-[41px] w-px transition-colors duration-300"
                style={{ background: isHovered ? '#E1C8A4' : '#f8f7f4' }}
              />
              <button className="w-[56px] h-[56px] rounded-[13px] overflow-hidden hover:scale-105 transition-transform bg-green-500 flex items-center justify-center">
                <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
                  <rect width="46" height="46" fill="#00AA57" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}