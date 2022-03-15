import React from "react";

const CheckoutInputSection = ({ sectionNumber, sectionTitle, children }) => (
  <section className="checkout__input-section">
    {sectionTitle && (
      <div className="checkout__input-section-header">
        <span className="checkout__input-section-number">
          {sectionNumber && sectionNumber}
        </span>
        <h3 className="checkout__input-section-title">{sectionTitle}</h3>
      </div>
    )}
    {children}
  </section>
);

export default CheckoutInputSection;
