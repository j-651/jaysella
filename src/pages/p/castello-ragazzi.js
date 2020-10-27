import React, { useState, useCallback } from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import styles from "./project.module.sass"

import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"
import { photos } from "../../assets/data/gallery-photos"

function CastelloRagazziPage() {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  const crPhotos = !!photos
    ? photos.filter(function (photo) {
        return photo.src.includes("castello")
      })
    : ""

  return (
    <Layout>
      <SEO title="Home" />
      <div className="sticky">
        <p className="back-button">
          <Link to="/" className="button icon-left">
            <span>&larr;</span> Back Home
          </Link>
        </p>
      </div>

      <div className={styles.top}>
        <section className="hero">
          <p className="preheader">
            <Link to="/">Jay Sella</Link> &mdash;{" "}
            <b>Webmaster + Communications Liaison</b>
          </p>
          <h1>Castello Ragazzi, LLC</h1>
          <p className="info">
            Management company for a rental property along the Eastern Shore.
          </p>
        </section>

        <aside className={styles.toc}>
          <h3>Contents</h3>
          <ul className="contents">
            <li>
              <a href="#highlights">Highlights</a>
            </li>
            {/* <li><a href="#website">Website</a></li> */}
            <li>
              <a href="#designs">Designs</a>
            </li>
          </ul>
        </aside>
      </div>

      <section id="highlights">
        <h3>Highlights:</h3>
        <article className="highlights">
          <ul className="list">
            <li>
              <span>
                Designed, developed, and maintained website and rental listing
                resulting in{" "}
                <mark>10 rentals and $12k in revenue per year</mark>
              </span>
            </li>
            <li>
              <span>
                Communicated with prospective renters and tenants resulting in
                an <mark>average review of 5 stars</mark>
              </span>
            </li>
            <li>
              <span>
                Assembled a <mark>locals’ guide</mark> for tenants’ reference
                while at the property
              </span>
            </li>
          </ul>
        </article>
      </section>

      {/* <section className={styles.project} id="website">
				<h3>Website:</h3>
				<p><span>&#8627;</span> Webmaster</p>

				<article className="project featured">
					<div className="left">
						<p>The purpose of this website was to showcase the property's pictures, features, pricing, and availability.</p>
					</div>
					<div className="right">
						<Gallery photos={crPhotos.filter(function (photo) { return photo.src.includes('castello-ragazzi') })} />
					</div>
				</article>
			</section> */}

      <section id="designs">
        <h3>Designs:</h3>
        <Gallery photos={crPhotos} onClick={openLightbox} />
      </section>

      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={crPhotos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Layout>
  )
}

export default CastelloRagazziPage
