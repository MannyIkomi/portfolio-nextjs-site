import { jsx } from "@emotion/react"
import TypeMotif from "../static/typemotif.png"
import { colors, s05, s5, s2, s15 } from "../styles"

export function ProfilePhoto({ motif, photo, ...props }) {
  return (
    <div // portrait container
      css={{
        aspectRatio: `1 / 1`,
        position: "relative",
        minWidth: s5,
        minHeight: s5,
        maxWidth: s15,
        maxHeight: s15,
        marginBottom: s2,
      }}
      {...props}
    >
      {motif && (
        <div
          // background motif
          css={{
            position: "absolute",
            bottom: "-20%",
            left: "-20%",
            width: "100%",
            height: "100%",

            opacity: 0.33,

            backgroundImage: `url(${TypeMotif})`,
            backgroundRepeat: "repeat",
            backgroundSize: "40%",
          }}
        ></div>
      )}

      <img
        css={{
          position: "relative",
          width: "100%",
          height: "auto",
          border: `solid ${s05} ${colors.YELLOW}`,
        }}
        srcSet={photo.fluid.srcSet}
        width={photo.dimensions.width}
        height={photo.dimensions.height}
        alt={photo.alt}
      />
    </div>
  )
}
