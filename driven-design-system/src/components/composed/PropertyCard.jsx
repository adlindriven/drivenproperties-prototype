/**
 * PropertyCard — Driven Properties Design System (Composed component)
 *
 * Renders one property listing card. Built using only primitives from the
 * design system (Button, Badge, Card, Icon).
 *
 * Two display modes based on data:
 *   Off-plan  – shows Handover / Payment Plan / Completion %
 *   Ready     – shows Beds / Baths / Area ft²
 *
 * Props:
 *   project       – full project data object (see propTypes below)
 *   onSelect      – callback when card is clicked
 *   inWatchlist   – boolean, true = heart filled gold
 *   onToggleWatchlist – callback(project)
 *   isHovered     – boolean, shows gold ring (for map sync)
 *   isInvestorMode – boolean, shows ROI alongside price
 *   onAddToCompare – callback(project), if omitted compare button is hidden
 *   inCompareList  – boolean, compare button shows checkmark
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../primitives/Button';
import Badge from '../primitives/Badge';
import Card from '../primitives/Card';
import Icon from '../icons/Icon';

// ─────────────────────────────────────────────────────────────────────────────
// Helper — build carousel image array from a single project image URL
// ─────────────────────────────────────────────────────────────────────────────

function buildImages(project) {
  if (project.images?.length) return project.images;
  const base = project.image;
  return [
    base,
    base.replace('?w=600', '?w=600&sat=-100'),
    base.replace('?w=600', '?w=600&brightness=10'),
    base.replace('?w=600', '?w=600&con=20'),
  ];
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const PropertyCard = ({
  project,
  onSelect,
  inWatchlist      = false,
  onToggleWatchlist,
  isHovered        = false,
  isInvestorMode   = false,
  onAddToCompare,
  inCompareList    = false,
}) => {
  const [isCardHovered,     setIsCardHovered]     = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images   = buildImages(project);
  const isOffPlan = !!project.handover;

  // Auto-advance images while hovering
  useEffect(() => {
    if (!isCardHovered) return;
    const id = setInterval(
      () => setCurrentImageIndex((i) => (i + 1) % images.length),
      4000
    );
    return () => clearInterval(id);
  }, [isCardHovered, images.length]);

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((i) => (i - 1 + images.length) % images.length);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((i) => (i + 1) % images.length);
  };

  return (
    <Card
      variant="property"
      hovering={isHovered}
      onClick={() => onSelect(project)}
      className="h-full flex flex-col group"
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      {/* ────────────────────────── Image area ─────────────────────────── */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
        {/* Image */}
        <img
          src={images[currentImageIndex]}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Prev / Next arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
            >
              <Icon name="arrowLeft" className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={nextImage}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
            >
              <Icon name="chevronRight" className="w-4 h-4 text-white" />
            </button>
          </>
        )}

        {/* Category badge — top-left */}
        {project.category && (
          <Badge
            variant="category"
            icon={<Icon name="playFilled" className="w-3 h-3" />}
            className="absolute top-3 left-3"
          >
            {project.category}
          </Badge>
        )}

        {/* Watchlist heart — top-right */}
        <Button
          variant="icon"
          size="icon-md"
          onClick={(e) => { e.stopPropagation(); onToggleWatchlist?.(project); }}
          aria-label={inWatchlist ? 'Remove from watchlist' : 'Add to watchlist'}
          className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm border-0 shadow-sm"
        >
          {inWatchlist
            ? <Icon name="heartFilled" className="w-4 h-4 text-accent-gold" />
            : <Icon name="heart"       className="w-4 h-4 text-warm-400" />}
        </Button>

        {/* Compare button — appears on hover, below heart */}
        {onAddToCompare && (isCardHovered || inCompareList) && (
          <Button
            variant={inCompareList ? 'gold' : 'icon'}
            size="icon-md"
            onClick={(e) => { e.stopPropagation(); onAddToCompare(project); }}
            aria-label={inCompareList ? 'Remove from compare' : 'Add to compare'}
            className="absolute top-14 right-3 border-0 shadow-sm"
          >
            <Icon name={inCompareList ? 'check' : 'layers'} className="w-4 h-4" />
          </Button>
        )}

        {/* Media badges — 3D / Video — bottom-left */}
        {(project.has3DTour || project.hasVideo) && (
          <div className="absolute bottom-3 left-3 flex gap-1.5">
            {project.has3DTour && (
              <Badge variant="media">
                <Icon name="cube" className="w-3 h-3" />
                3D
              </Badge>
            )}
            {project.hasVideo && (
              <Badge variant="media">
                <Icon name="playFilled" className="w-3 h-3" />
                Video
              </Badge>
            )}
          </div>
        )}

        {/* Image dot indicators — bottom-right */}
        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 flex gap-1">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                aria-label={`Image ${idx + 1}`}
                className={`rounded-full transition-all ${
                  idx === currentImageIndex
                    ? 'bg-white w-4 h-1.5'
                    : 'bg-white/50 w-1.5 h-1.5'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* ────────────────────────── Card body ──────────────────────────── */}
      <div className="p-4 flex-1 flex flex-col gap-3">

        {/* Title */}
        <h3 className="font-bold text-warm-900 text-[15px] leading-snug line-clamp-2">
          {project.name}
        </h3>

        {/* Specs row — conditional */}
        {isOffPlan ? (
          <div className="flex items-center gap-3 text-warm-500 text-xs">
            <span className="flex items-center gap-1">
              <Icon name="calendar" className="w-3.5 h-3.5 text-warm-400" />
              <span className="font-medium text-warm-700">{project.handover}</span>
            </span>
            <span className="text-warm-200" aria-hidden="true">|</span>
            <span className="flex items-center gap-1">
              <Icon name="code" className="w-3.5 h-3.5 text-warm-400" />
              <span className="font-medium text-warm-700">{project.paymentPlan}</span>
            </span>
            <span className="text-warm-200" aria-hidden="true">|</span>
            <span className="flex items-center gap-1">
              <Icon name="clock" className="w-3.5 h-3.5 text-warm-400" />
              <span className="font-medium text-warm-700">{project.progress}%</span>
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-3 text-warm-500 text-xs">
            <span className="flex items-center gap-1.5">
              <Icon name="bed" className="w-3.5 h-3.5" />
              <span className="font-medium text-warm-700">{project.beds}</span>
            </span>
            <span className="text-warm-200" aria-hidden="true">|</span>
            <span className="flex items-center gap-1.5">
              <Icon name="bath" className="w-3.5 h-3.5" />
              <span className="font-medium text-warm-700">{project.baths}</span>
            </span>
            <span className="text-warm-200" aria-hidden="true">|</span>
            <span className="flex items-center gap-1.5">
              <Icon name="area" className="w-3.5 h-3.5" />
              <span className="font-medium text-warm-700">{project.sqft} ft²</span>
            </span>
          </div>
        )}

        {/* Location pill */}
        <div className="bg-warm-50 rounded-xl px-3 py-2 flex items-start gap-2">
          <Icon name="mapPin" className="w-3.5 h-3.5 text-warm-400 mt-0.5 flex-shrink-0" />
          <p className="text-warm-600 text-xs leading-snug">
            <span className="font-semibold text-warm-800">{project.area}</span>
            {project.location !== project.area ? ` by ${project.developer}` : ''}
            <br />
            <span>{project.location}, Dubai</span>
          </p>
        </div>

        {/* Price row */}
        <div className="flex items-end justify-between mt-auto pt-1">
          <div>
            <p className="text-[11px] text-warm-400 mb-0.5 flex items-center gap-1">
              <Icon name="aed" className="w-3 h-3" />
              {project.pricePerSqft}/sqft/month*
            </p>
            <p className="text-lg font-bold text-warm-900 leading-none flex items-center gap-1">
              <Icon name="aed" className="w-4 h-4 text-warm-600" />
              {project.price.replace('AED ', '')}
            </p>
          </div>
          {isInvestorMode && (
            <div className="text-right">
              <p className="text-[11px] text-warm-400">ROI</p>
              <p className="text-base font-bold text-accent-green">{project.roi}</p>
            </div>
          )}
        </div>

        {/* Divider */}
        <hr className="border-warm-100" />

        {/* Agent + CTAs */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src={project.agent?.image}
              alt={project.agent?.name}
              className="w-9 h-9 rounded-full object-cover flex-shrink-0"
            />
            <div>
              <p className="text-[10px] text-warm-400 leading-none mb-0.5">Listed By</p>
              <p className="text-xs font-semibold text-warm-800 leading-none">
                {project.agent?.name}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Call */}
            <Button
              variant="icon"
              size="icon-md"
              onClick={(e) => e.stopPropagation()}
              aria-label="Call agent"
            >
              <Icon name="phone" className="w-4 h-4" />
            </Button>

            {/* WhatsApp */}
            <Button
              variant="whatsapp"
              size="icon-md"
              onClick={(e) => e.stopPropagation()}
              aria-label="WhatsApp agent"
              className="border-0"
            >
              <Icon name="whatsapp" className="w-4 h-4 text-white" />
            </Button>
          </div>
        </div>

      </div>
    </Card>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// PropTypes
// ─────────────────────────────────────────────────────────────────────────────

const projectShape = PropTypes.shape({
  id:           PropTypes.number,
  name:         PropTypes.string.isRequired,
  developer:    PropTypes.string,
  location:     PropTypes.string,
  area:         PropTypes.string,
  price:        PropTypes.string.isRequired,
  pricePerSqft: PropTypes.string,
  roi:          PropTypes.string,
  // Off-plan
  handover:     PropTypes.string,
  paymentPlan:  PropTypes.string,
  progress:     PropTypes.number,
  category:     PropTypes.string,
  // Ready
  beds:         PropTypes.number,
  baths:        PropTypes.number,
  sqft:         PropTypes.string,
  // Media
  image:        PropTypes.string,
  images:       PropTypes.arrayOf(PropTypes.string),
  has3DTour:    PropTypes.bool,
  hasVideo:     PropTypes.bool,
  // Agent
  agent: PropTypes.shape({
    name:  PropTypes.string,
    image: PropTypes.string,
  }),
});

PropertyCard.propTypes = {
  project:          projectShape.isRequired,
  onSelect:         PropTypes.func.isRequired,
  inWatchlist:      PropTypes.bool,
  onToggleWatchlist:PropTypes.func,
  isHovered:        PropTypes.bool,
  isInvestorMode:   PropTypes.bool,
  onAddToCompare:   PropTypes.func,
  inCompareList:    PropTypes.bool,
};

export default PropertyCard;
