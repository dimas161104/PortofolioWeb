import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { ShieldCheck, Cpu, QrCode } from 'lucide-react';
import '../styles/idcard.css';

export default function IdCard() {
  const [imgSrc, setImgSrc] = useState(siteConfig.profileImage || '/images/profile.svg');

  return (
    <div className="idcard-wrapper" aria-label="Creative Access ID Card">
      {/* Lanyard Top Strap & Clip Simulation */}
      <div className="idcard-lanyard-hanger">
        <div className="idcard-clip" />
      </div>

      {/* Main Physical ID Card Badge */}
      <div className="idcard-body">
        {/* Lanyard Punch Hole Cutout */}
        <div className="idcard-hole-cutout" />

        {/* Card Header */}
        <div className="idcard-header">
          <div className="idcard-header-left">
            <span className="idcard-title mono-text">CREATIVE ACCESS PASS</span>
            <span className="idcard-edition mono-text">ED-2026 // ARCH-04</span>
          </div>
          <div className="idcard-chip-badge">
            <Cpu size={16} strokeWidth={1.75} />
          </div>
        </div>

        {/* Photo Container with Technical Frame */}
        <div className="idcard-photo-frame">
          <div className="idcard-corner-bracket top-left" />
          <div className="idcard-corner-bracket top-right" />
          <div className="idcard-corner-bracket bottom-left" />
          <div className="idcard-corner-bracket bottom-right" />

          <img
            src={imgSrc}
            alt={siteConfig.name}
            className="idcard-photo"
            onError={() => setImgSrc('/images/profile.svg')}
          />

          {/* Verification Badge */}
          <div className="idcard-status-badge">
            <span className="idcard-pulse-dot" />
            <span className="mono-text">VERIFIED CREATIVE</span>
          </div>
        </div>

        {/* ID Holder Credentials */}
        <div className="idcard-credentials">
          <div className="idcard-cred-row">
            <span className="cred-label mono-text">CARD HOLDER</span>
            <span className="cred-value-name">{siteConfig.fullName || siteConfig.name}</span>
          </div>

          <div className="idcard-cred-split">
            <div className="idcard-cred-col">
              <span className="cred-label mono-text">ROLE</span>
              <span className="cred-value text-red">{siteConfig.role}</span>
            </div>
            <div className="idcard-cred-col">
              <span className="cred-label mono-text">ACADEMIA</span>
              <span className="cred-value">{siteConfig.location}</span>
            </div>
          </div>

          <div className="idcard-cred-split">
            <div className="idcard-cred-col">
              <span className="cred-label mono-text">CLEARANCE</span>
              <span className="cred-value mono-text">UNRESTRICTED</span>
            </div>
            <div className="idcard-cred-col">
              <span className="cred-label mono-text">SERIAL REF</span>
              <span className="cred-value mono-text">R-049_2607-26</span>
            </div>
          </div>
        </div>

        {/* Barcode & Security Strip at Bottom */}
        <div className="idcard-footer-strip">
          <div className="idcard-barcode-lines" aria-hidden="true">
            {/* Realistic Barcode Lines */}
            <span className="bc-bar w-1" /><span className="bc-bar w-3" /><span className="bc-bar w-1" />
            <span className="bc-bar w-2" /><span className="bc-bar w-4" /><span className="bc-bar w-1" />
            <span className="bc-bar w-3" /><span className="bc-bar w-2" /><span className="bc-bar w-1" />
            <span className="bc-bar w-4" /><span className="bc-bar w-2" /><span className="bc-bar w-3" />
            <span className="bc-bar w-1" /><span className="bc-bar w-2" /><span className="bc-bar w-4" />
            <span className="bc-bar w-2" /><span className="bc-bar w-1" /><span className="bc-bar w-3" />
            <span className="bc-bar w-1" /><span className="bc-bar w-4" /><span className="bc-bar w-2" />
          </div>
          <div className="idcard-seal mono-text">
            <span>SWISS DISCIPLINE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
