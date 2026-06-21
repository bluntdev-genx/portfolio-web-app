import {
  Document,
  Link,
  Page,
  StyleSheet,
  Text,
  View
} from "@react-pdf/renderer";
import {
  capabilityGroups,
  certification,
  education,
  experience,
  impactMetrics,
  profile,
  type ResumeVariant
} from "../content/profile";

const colors = {
  ink: "#102235",
  muted: "#5b6b7d",
  teal: "#0d766f",
  line: "#b6c5d0",
  panel: "#eef4f3"
};

export const resumePageBackgroundColor = "#ffffff";

const styles = StyleSheet.create({
  page: {
    paddingTop: 30,
    paddingRight: 34,
    paddingBottom: 28,
    paddingLeft: 34,
    fontFamily: "Helvetica",
    color: colors.ink,
    backgroundColor: resumePageBackgroundColor,
    fontSize: 8.8,
    lineHeight: 1.23
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    borderBottomWidth: 1.3,
    borderBottomColor: colors.ink,
    paddingBottom: 10,
    marginBottom: 10
  },
  headerIdentity: {
    flexGrow: 1,
    flexShrink: 1,
    paddingRight: 8
  },
  name: {
    fontSize: 24,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 0,
    lineHeight: 1.05,
    marginBottom: 8
  },
  headline: {
    color: colors.teal,
    fontFamily: "Helvetica-Bold",
    fontSize: 9.2,
    lineHeight: 1.18,
    textTransform: "uppercase",
    maxWidth: 340
  },
  contact: {
    width: 205,
    textAlign: "right",
    color: colors.muted,
    fontSize: 8.2,
    lineHeight: 1.35
  },
  section: {
    marginTop: 8
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 4
  },
  sectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9.8,
    letterSpacing: 0.9,
    textTransform: "uppercase"
  },
  rule: {
    flex: 1,
    height: 1,
    backgroundColor: colors.line
  },
  summary: {
    fontSize: 9.2,
    lineHeight: 1.3,
    color: "#27384b"
  },
  metrics: {
    flexDirection: "row",
    gap: 6,
    marginTop: 8
  },
  metric: {
    flex: 1,
    backgroundColor: colors.panel,
    borderTopWidth: 1.5,
    borderTopColor: colors.teal,
    padding: 6
  },
  metricValue: {
    fontFamily: "Helvetica-Bold",
    fontSize: 14,
    marginBottom: 2
  },
  metricLabel: {
    color: colors.muted,
    textTransform: "uppercase",
    fontSize: 6.8,
    lineHeight: 1.15
  },
  columns: {
    flexDirection: "row",
    gap: 8
  },
  capability: {
    flex: 1,
    borderLeftWidth: 1.2,
    borderLeftColor: colors.line,
    paddingLeft: 7
  },
  capabilityTitle: {
    color: colors.teal,
    fontFamily: "Helvetica-Bold",
    fontSize: 8.5,
    textTransform: "uppercase",
    marginBottom: 2
  },
  box: {
    borderWidth: 0.7,
    borderColor: "#d8e1e6",
    padding: 6,
    marginTop: 6
  },
  row: {
    flexDirection: "row",
    gap: 14,
    marginTop: 8,
    borderTopWidth: 0.6,
    borderTopColor: "#d8e1e6",
    paddingTop: 7
  },
  firstRow: {
    borderTopWidth: 0,
    paddingTop: 0
  },
  roleMeta: {
    width: 142
  },
  company: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9
  },
  product: {
    color: colors.muted,
    marginTop: 2
  },
  role: {
    color: colors.teal,
    fontFamily: "Helvetica-Bold",
    marginTop: 5
  },
  date: {
    color: colors.muted,
    marginTop: 3
  },
  bullets: {
    flex: 1
  },
  bulletRow: {
    flexDirection: "row",
    gap: 4,
    marginBottom: 3.5
  },
  bulletDot: {
    color: colors.teal,
    width: 6
  },
  bulletText: {
    flex: 1
  },
  footerGrid: {
    flexDirection: "row",
    gap: 24,
    marginTop: 6
  },
  footerCol: {
    flex: 1
  },
  footerTitle: {
    color: colors.teal,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    marginBottom: 3
  },
  strong: {
    fontFamily: "Helvetica-Bold"
  }
});

type ResumeDocumentProps = {
  variant: ResumeVariant;
};

function BulletList({ bullets }: { bullets: string[] }) {
  return (
    <View>
      {bullets.map((bullet) => (
        <View key={bullet} style={styles.bulletRow}>
          <Text style={styles.bulletDot}>-</Text>
          <Text style={styles.bulletText}>{bullet}</Text>
        </View>
      ))}
    </View>
  );
}

export function ResumeDocument({ variant }: ResumeDocumentProps) {
  const selectedCapabilities = capabilityGroups.filter((group) =>
    variant.capabilityTitles.includes(group.title)
  );

  return (
    <Document
      author={profile.name}
      subject={variant.headline}
      title={`${profile.name} - ${variant.headline}`}
    >
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.header}>
          <View style={styles.headerIdentity}>
            <Text style={styles.name}>{profile.name}</Text>
            <Text style={styles.headline}>{variant.headline}</Text>
          </View>
          <View style={styles.contact}>
            <Text>{profile.email}</Text>
            <Text>{profile.phone}</Text>
            <Link src={`https://${profile.linkedin}`}>{profile.linkedin}</Link>
            <Link src={`https://${profile.github}`}>{profile.github}</Link>
            <Text>{profile.location}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Profile</Text>
            <View style={styles.rule} />
          </View>
          <Text style={styles.summary}>{variant.summary}</Text>
          <View style={styles.metrics}>
            {impactMetrics.map((metric) => (
              <View key={metric.label} style={styles.metric}>
                <Text style={styles.metricValue}>{metric.value}</Text>
                <Text style={styles.metricLabel}>{metric.label}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Core Capabilities</Text>
            <View style={styles.rule} />
          </View>
          <View style={styles.columns}>
            {selectedCapabilities.map((capability) => (
              <View key={capability.title} style={styles.capability}>
                <Text style={styles.capabilityTitle}>{capability.title}</Text>
                <Text>{capability.summary}</Text>
              </View>
            ))}
          </View>
          <View style={styles.box}>
            <Text>
              <Text style={styles.strong}>Technology: </Text>
              {variant.technologyLine}
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Experience</Text>
            <View style={styles.rule} />
          </View>
          {experience.map((item, index) => (
            <View
              key={`${item.company}-${item.role}`}
              style={index === 0 ? [styles.row, styles.firstRow] : styles.row}
            >
              <View style={styles.roleMeta}>
                <Text style={styles.company}>{item.company}</Text>
                {item.product ? <Text style={styles.product}>{item.product}</Text> : null}
                <Text style={styles.role}>{item.role}</Text>
                <Text style={styles.date}>{item.dates}</Text>
                <Text style={styles.date}>{item.location}</Text>
              </View>
              <View style={styles.bullets}>
                <BulletList bullets={index === 0 ? variant.experienceHighlights : item.bullets} />
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Education & Credentials</Text>
            <View style={styles.rule} />
          </View>
          <View style={styles.footerGrid}>
            <View style={styles.footerCol}>
              <Text style={styles.footerTitle}>Education</Text>
              <Text style={styles.strong}>{education.degree}</Text>
              <Text>{education.institution} | {education.dates}</Text>
            </View>
            <View style={styles.footerCol}>
              <Text style={styles.footerTitle}>Certification</Text>
              <Text style={styles.strong}>{certification.name}</Text>
              <Text>{certification.issuer} - {certification.focus}</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
