'use client';

import React from 'react';
import StorySection from './StorySection';
import ShippingMockup from './mockups/ShippingMockup';
import WarehouseMockup from './mockups/WarehouseMockup';
import FactoryMockup from './mockups/FactoryMockup';
import FleetMockup from './mockups/FleetMockup';
import TiepMockup from './mockups/TiepMockup';
import FinanceMockup from './mockups/FinanceMockup';

const LifecycleStory: React.FC = () => {
  return (
    <>
      <StorySection
        id="shipping"
        eyebrow="Shipping"
        title="Move parcels from pickup to signed delivery."
        description="EMS-style courier pipelines with stage boards, destination tracking, and customer-ready status — built for high-volume last-mile and hub operations."
        muted
      >
        <ShippingMockup />
      </StorySection>

      <StorySection
        id="warehouse"
        eyebrow="Warehouse"
        title="Receive, store, and pick with full inventory control."
        description="Barcode-ready WMS for multi-zone warehouses — stock levels, pick rates, and order fulfillment in one live view so nothing sits invisible on a shelf."
        reverse
      >
        <WarehouseMockup />
      </StorySection>

      <StorySection
        id="factory"
        eyebrow="Factory"
        title="Plan production, hit targets, hold quality."
        description="Line-level targets, OEE-style progress, work orders, and defect signals — so manufacturing stays on schedule without spreadsheet chaos."
        muted
      >
        <FactoryMockup />
      </StorySection>

      <StorySection
        id="transport"
        eyebrow="Transport"
        title="See every vehicle, driver, and ETA in real time."
        description="GPS tracking, utilization, and dispatch status across your fleet — so ops knows what’s en route, idle, or loading before the customer asks."
        reverse
      >
        <FleetMockup />
      </StorySection>

      <StorySection
        id="tiep"
        eyebrow="TIEP"
        title="Orchestrate transport corridors end to end."
        description="Route optimization, corridor loads, and weekly savings insights — TIEP ties logistics planning to the vehicles and warehouses already running on MUTU."
        muted
      >
        <TiepMockup />
      </StorySection>

      <StorySection
        id="finance"
        eyebrow="Finance"
        title="Connect money flow to every logistics move."
        description="Invoices, collections, and cost visibility linked to shipping, warehouse, and transport work — so finance and ops stop reconciling from separate spreadsheets."
        reverse
      >
        <FinanceMockup />
      </StorySection>
    </>
  );
};

export default LifecycleStory;
