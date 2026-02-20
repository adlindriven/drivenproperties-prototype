import React, { useState, useEffect } from 'react';
import { Icon } from './Icon';
import { Dhs } from './Dhs';

export const PropertyCard = ({ project, onSelect, inWatchlist, onToggleWatchlist, isHovered, isInvestorMode, onAddToCompare, inCompareList }) => {
    const [showCompareIcon, setShowCompareIcon] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = project.images || [
        project.image,
        project.image.replace('?w=600', '?w=600&sat=-100'),
        project.image.replace('?w=600', '?w=600&brightness=10'),
        project.image.replace('?w=600', '?w=600&con=20'),
        project.image.replace('?w=600', '?w=600&hue=10')
    ];

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        if (!showCompareIcon) return;
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [showCompareIcon, images.length]);

    const isOffPlan = !!project.handover;
    const cardHovered = showCompareIcon;

    return (
        <div className="property-card-wrap h-full group">
            <div
                className="property-card-wrap-inner rounded-[32px] border p-[12px] transition-all duration-300 cursor-pointer h-full bg-[#F1EBE1] md:bg-[#FFFFFF] md:group-hover:bg-[#F1EBE1] border-[#887860] md:border-[#ebebe2] md:group-hover:border-[#887860] shadow-[-18px_51px_15px_rgba(217,217,217,0.01),-11px_33px_14px_rgba(217,217,217,0.1),-6px_18px_12px_rgba(217,217,217,0.33),-3px_8px_9px_rgba(217,217,217,0.56),-1px_2px_5px_rgba(217,217,217,0.64)] md:shadow-none md:group-hover:shadow-[-18px_51px_15px_rgba(217,217,217,0.01),-11px_33px_14px_rgba(217,217,217,0.1),-6px_18px_12px_rgba(217,217,217,0.33),-3px_8px_9px_rgba(217,217,217,0.56),-1px_2px_5px_rgba(217,217,217,0.64)]"
                onClick={() => onSelect && onSelect(project)}
                onMouseEnter={() => setShowCompareIcon(true)}
                onMouseLeave={() => setShowCompareIcon(false)}
            >
                <div className="property-card-inner flex flex-col gap-[12px] h-full">
                    {/* Image */}
                    <div className="card-image-area relative h-[220px] rounded-[16px] overflow-hidden group">
                        <img
                            src={images[currentImageIndex]}
                            alt={project.name}
                            className="w-full h-full object-cover"
                        />
                        {/* Inner border overlay */}
                        <div className="absolute inset-0 rounded-[16px] pointer-events-none transition-colors duration-300 border-[#E1C8A4] md:border-[#f8f7f4] md:group-hover:border-[#E1C8A4]" style={{ borderWidth: '1px' }} />

                        {/* 3D / Video badges — bottom left */}
                        <div className="absolute bottom-[8px] left-[8px] flex gap-[8px]">
                            {project.has3DTour && (
                                <span className="flex items-center gap-[8px] px-[8px] py-[4px] rounded-[8px] text-[#fbfbfb] text-[12px]" style={{ background: 'rgba(75,75,75,0.51)', border: '1px solid rgba(88,88,88,0.33)' }}>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
                                    3D
                                </span>
                            )}
                            {project.hasVideo && (
                                <span className="flex items-center gap-[8px] px-[8px] py-[4px] rounded-[8px] text-[#fbfbfb] text-[12px]" style={{ background: 'rgba(75,75,75,0.51)', border: '1px solid rgba(88,88,88,0.33)' }}>
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21" /></svg>
                                    Video
                                </span>
                            )}
                        </div>

                        {/* Watchlist heart — Airbnb style */}
                        <button
                            onClick={(e) => { e.stopPropagation(); onToggleWatchlist && onToggleWatchlist(project.id); }}
                            className="absolute top-[8px] right-[8px] w-[32px] h-[32px] flex items-center justify-center transition-transform duration-200 hover:scale-110"
                            style={{ background: 'transparent', border: 'none' }}
                        >
                            {inWatchlist
                                ? <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" style={{ filter: 'drop-shadow(0px 1px 2px rgba(0,0,0,0.3))' }}><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#FF385C" stroke="white" strokeWidth="1.5" /></svg>
                                : <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" style={{ filter: 'drop-shadow(0px 1px 2px rgba(0,0,0,0.3))' }}><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="rgba(0,0,0,0.5)" stroke="white" strokeWidth="1.5" /></svg>}
                        </button>

                        {/* Navigation arrows — visible on hover (desktop), always (mobile) */}
                        {images.length > 1 && (
                            <div className="absolute inset-0 flex items-center justify-between px-[9px] pointer-events-none transition-opacity duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100">
                                <button onClick={prevImage} className="pointer-events-auto rounded-[20px] w-[32px] h-[32px] flex items-center justify-center hover:bg-[rgba(111,110,110,0.6)] transition-colors" style={{ background: 'rgba(111,110,110,0.43)', border: '0.476px solid #b1b1ab' }}>
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none"><path d="M12 4L7 9.5L12 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </button>
                                <button onClick={nextImage} className="pointer-events-auto rounded-[20px] w-[32px] h-[32px] flex items-center justify-center hover:bg-[rgba(111,110,110,0.6)] transition-colors" style={{ background: 'rgba(111,110,110,0.43)', border: '0.476px solid #b1b1ab' }}>
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none"><path d="M7 4L12 9.5L7 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </button>
                            </div>
                        )}

                        {/* Image dots */}
                        {images.length > 1 && (
                            <div className="absolute bottom-[8px] right-[8px] flex gap-1">
                                {images.map((_, idx) => (
                                    <button key={idx} onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                                        className={`rounded-full transition-all ${idx === currentImageIndex ? 'bg-white w-4 h-1.5' : 'bg-white/50 w-1.5 h-1.5'}`} />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Details Container */}
                    <div className="card-content-area px-[8px] flex flex-col gap-[8px] flex-1">
                        {/* Title + Specs */}
                        <div className="px-[12px] flex flex-col gap-[16px]">
                            <p className="font-bold text-[#1c1c1a] text-[16px] leading-[20px] line-clamp-2" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                {project.name}
                            </p>

                            {/* Specs row */}
                            {isOffPlan ? (
                                <div className="flex items-center flex-wrap gap-x-3 gap-y-1 text-[#7c7c78] text-[13px]">
                                    <span className="flex items-center gap-[10px]">
                                        <svg className="w-[20px] h-[20px] transition-colors duration-300 text-[#A49075] md:text-[#B1B1AB] md:group-hover:text-[#A49075]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M15.5 2.5v4m-7-4v4m-4.5 3h16m-16-3a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2h-12a2 2 0 01-2-2v-12z" /></svg>
                                        <span className="font-bold text-[#1c1c1a] text-[16px] leading-[20px]">{project.handover}</span>
                                    </span>
                                    <div className="h-[20px] w-px rounded-[8px] transition-colors duration-300 bg-[#E1C8A4] md:bg-[#f8f7f4] md:group-hover:bg-[#E1C8A4]" />
                                    <span className="flex items-center gap-[10px]">
                                        <svg className="w-[20px] h-[20px] transition-colors duration-300 text-[#A49075] md:text-[#B1B1AB] md:group-hover:text-[#A49075]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>
                                        <span className="font-bold text-[#1c1c1a] text-[16px] leading-[20px]">{project.paymentPlan}</span>
                                    </span>
                                    <div className="h-[20px] w-px rounded-[8px] transition-colors duration-300 bg-[#E1C8A4] md:bg-[#f8f7f4] md:group-hover:bg-[#E1C8A4]" />
                                    <span className="flex items-center gap-[10px]">
                                        <svg className="w-[20px] h-[20px] transition-colors duration-300 text-[#A49075] md:text-[#B1B1AB] md:group-hover:text-[#A49075]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        <span className="font-bold text-[#1c1c1a] text-[16px] leading-[20px]">{project.progress}%</span>
                                    </span>
                                </div>
                            ) : (
                                <div className="flex gap-[8px] items-center">
                                    <div className="flex gap-[10px] items-center min-w-[60px]">
                                        <Icon name="bed" className="w-[20px] h-[20px] transition-colors duration-300 text-[#A49075] md:text-[#B1B1AB] md:group-hover:text-[#A49075]" style={{ opacity: 0.72 }} />
                                        <span className="font-bold text-[#1c1c1a] text-[16px] leading-[20px]">{project.beds}</span>
                                    </div>
                                    <div className="h-[20px] w-px rounded-[8px] transition-colors duration-300 bg-[#E1C8A4] md:bg-[#f8f7f4] md:group-hover:bg-[#E1C8A4]" />
                                    <div className="flex gap-[10px] items-center min-w-[60px]">
                                        <Icon name="bath" className="w-[20px] h-[20px] transition-colors duration-300 text-[#A49075] md:text-[#B1B1AB] md:group-hover:text-[#A49075]" style={{ opacity: 0.72 }} />
                                        <span className="font-bold text-[#1c1c1a] text-[16px] leading-[20px]">{project.baths}</span>
                                    </div>
                                    <div className="h-[20px] w-px rounded-[8px] transition-colors duration-300 bg-[#E1C8A4] md:bg-[#f8f7f4] md:group-hover:bg-[#E1C8A4]" />
                                    <div className="flex gap-[10px] items-center min-w-[60px]">
                                        <Icon name="area" className="w-[20px] h-[20px] transition-colors duration-300 text-[#A49075] md:text-[#B1B1AB] md:group-hover:text-[#A49075]" style={{ opacity: 0.72 }} />
                                        <span className="font-bold text-[#1c1c1a] text-[16px] leading-[20px]">{project.sqft} ft²</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Location Container */}
                        <div className="rounded-[6px] px-[12px] py-[8px] transition-all duration-300 bg-[#FFFBF6] md:bg-[#f8f7f4] md:group-hover:bg-[#FFFBF6]" style={{
                            borderTop: '1px solid #ebebe2',
                            borderBottom: '1px solid #ebebe2',
                            borderTopColor: 'inherit', // Let Tailwind handle it
                            borderBottomColor: 'inherit',
                        }}>
                            <div className="flex gap-[10px] items-center">
                                <Icon name="mapPin" className="w-[20px] h-[20px] flex-shrink-0" style={{ color: '#7c7c78', opacity: 0.72 }} />
                                <div className="flex-1 flex flex-col gap-[4px]">
                                    <p className="font-bold text-[#7c7c78] text-[16px] leading-[20px]">{project.developer}</p>
                                    <p className="font-bold text-[#7c7c78] text-[16px] leading-[20px]">{project.location}, Dubai</p>
                                </div>
                            </div>
                        </div>

                        {/* Price Container */}
                        <div className="rounded-[6px] px-[16px] py-[8px] flex items-end justify-between transition-colors duration-300 mt-auto bg-[#FFFBF6] md:bg-[#f8f7f4] md:group-hover:bg-[#FFFBF6]">
                            <div className="px-[8px] py-[8px] rounded-[14px] flex gap-[4px] items-center transition-colors duration-300 bg-[rgba(225,200,164,0.34)] md:bg-[#ebebe2] md:group-hover:bg-[rgba(225,200,164,0.34)]">
                                <Dhs className="text-[13px]" />
                                <span className="font-semibold text-[#1c1c1a] text-[14px] leading-[24px]">{project.pricePerSqft} emi*</span>
                            </div>
                            <div className="flex gap-[4px] items-baseline">
                                <Dhs className="text-[15px] text-[#7c7c78]" />
                                <span className="font-[800] text-[#1c1c1a] text-[20px] leading-[24px]">{project.price ? project.price.replace('د.إ', '') : project.price}</span>
                            </div>
                        </div>

                        {/* Agent Container */}
                        <div className="pt-[8px] flex items-center justify-between transition-colors duration-300 border-t-[#E1C8A4] md:border-t-[#f8f7f4] md:group-hover:border-t-[#E1C8A4]" style={{ borderTopWidth: '1px' }}>
                            {project.agent && (
                                <div className="flex gap-[8px] items-center flex-1">
                                    <img
                                        src={project.agent.image}
                                        alt={project.agent.name}
                                        className="w-[40px] h-[40px] rounded-full object-cover transition-all duration-300 border-[1.6px] border-[#E1C8A4] md:border-transparent md:group-hover:border-[#E1C8A4]"
                                    />
                                    <div className="flex flex-col gap-[6px]">
                                        <p className="text-[#7c7c78] text-[14px] leading-[18px]">Listed By</p>
                                        <p className="font-bold text-[#1c1c1a] text-[14px] overflow-hidden text-ellipsis whitespace-nowrap">{project.agent.name}</p>
                                    </div>
                                </div>
                            )}

                            {/* Contact Icons */}
                            <div className="flex gap-[11px] items-center">
                                <button onClick={(e) => e.stopPropagation()}
                                    className="w-[46px] h-[46px] rounded-[13px] flex items-center justify-center hover:scale-105 transition-transform bg-gray-100 text-[#7c7c78]">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </button>
                                <div className="h-[41px] w-px transition-colors duration-300 bg-[#E1C8A4] md:bg-[#f8f7f4] md:group-hover:bg-[#E1C8A4]" />
                                <button onClick={(e) => e.stopPropagation()}
                                    className="w-[46px] h-[46px] rounded-[13px] flex items-center justify-center hover:scale-105 transition-transform bg-[#25D366]">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.118.554 4.107 1.523 5.834L.044 23.956l6.26-1.458A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.626 0 11.999 0zm.001 21.818a9.793 9.793 0 01-4.988-1.362l-.357-.212-3.716.866.897-3.622-.232-.371A9.79 9.79 0 012.182 12c0-5.414 4.404-9.818 9.818-9.818 5.415 0 9.818 4.404 9.818 9.818 0 5.415-4.403 9.818-9.818 9.818z" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
