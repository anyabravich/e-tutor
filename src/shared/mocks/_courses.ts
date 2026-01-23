import courses1 from '../images/courses-1.avif'
import courses2 from '../images/courses-2.avif'
import courses3 from '../images/courses-3.avif'
import courses4 from '../images/courses-4.avif'

export interface CourseModule {
  titleKey: string
  lessons: number
}

export interface Course {
  slug: string
  image: ImageMetadata
  categoryKey: string
  category: string
  rating: number
  students: number
  price: number
  originalPrice: number
  color: string
  duration: string
  lessonsCount: number
  level: 'beginner' | 'intermediate' | 'advanced'
  modules: CourseModule[]
  featuresCount: number
}

export const courses: Course[] = [
  {
    slug: 'web-development',
    image: courses1,
    categoryKey: 'webDev',
    category: 'development',
    rating: 4.9,
    students: 12500,
    price: 89,
    originalPrice: 199,
    color: 'primary',
    duration: '40h',
    lessonsCount: 156,
    level: 'beginner',
    modules: [
      { titleKey: 'webDev.modules.intro', lessons: 8 },
      { titleKey: 'webDev.modules.html', lessons: 24 },
      { titleKey: 'webDev.modules.css', lessons: 32 },
      { titleKey: 'webDev.modules.js', lessons: 48 },
      { titleKey: 'webDev.modules.react', lessons: 36 },
      { titleKey: 'webDev.modules.project', lessons: 8 }
    ],
    featuresCount: 6
  },
  {
    slug: 'ui-ux-design',
    image: courses2,
    categoryKey: 'uiux',
    category: 'design',
    rating: 4.8,
    students: 8900,
    price: 79,
    originalPrice: 149,
    color: 'secondary',
    duration: '32h',
    lessonsCount: 98,
    level: 'intermediate',
    modules: [
      { titleKey: 'uiux.modules.fundamentals', lessons: 12 },
      { titleKey: 'uiux.modules.research', lessons: 16 },
      { titleKey: 'uiux.modules.wireframing', lessons: 20 },
      { titleKey: 'uiux.modules.prototyping', lessons: 24 },
      { titleKey: 'uiux.modules.testing', lessons: 18 },
      { titleKey: 'uiux.modules.portfolio', lessons: 8 }
    ],
    featuresCount: 6
  },
  {
    slug: 'data-science',
    image: courses3,
    categoryKey: 'dataScience',
    category: 'business',
    rating: 4.9,
    students: 15200,
    price: 99,
    originalPrice: 249,
    color: 'accent',
    duration: '56h',
    lessonsCount: 184,
    level: 'advanced',
    modules: [
      { titleKey: 'dataScience.modules.python', lessons: 24 },
      { titleKey: 'dataScience.modules.stats', lessons: 28 },
      { titleKey: 'dataScience.modules.ml', lessons: 40 },
      { titleKey: 'dataScience.modules.deepLearning', lessons: 36 },
      { titleKey: 'dataScience.modules.nlp', lessons: 32 },
      { titleKey: 'dataScience.modules.capstone', lessons: 24 }
    ],
    featuresCount: 6
  },
  {
    slug: 'digital-marketing',
    image: courses4,
    categoryKey: 'marketing',
    category: 'marketing',
    rating: 4.7,
    students: 6800,
    price: 69,
    originalPrice: 129,
    color: 'success',
    duration: '28h',
    lessonsCount: 86,
    level: 'beginner',
    modules: [
      { titleKey: 'marketing.modules.fundamentals', lessons: 10 },
      { titleKey: 'marketing.modules.seo', lessons: 16 },
      { titleKey: 'marketing.modules.social', lessons: 20 },
      { titleKey: 'marketing.modules.email', lessons: 14 },
      { titleKey: 'marketing.modules.analytics', lessons: 18 },
      { titleKey: 'marketing.modules.strategy', lessons: 8 }
    ],
    featuresCount: 6
  },
  {
    slug: 'python-programming',
    image: courses1,
    categoryKey: 'python',
    category: 'development',
    rating: 4.9,
    students: 18300,
    price: 79,
    originalPrice: 179,
    color: 'primary',
    duration: '36h',
    lessonsCount: 124,
    level: 'beginner',
    modules: [
      { titleKey: 'python.modules.basics', lessons: 20 },
      { titleKey: 'python.modules.oop', lessons: 24 },
      { titleKey: 'python.modules.dataStructures', lessons: 28 },
      { titleKey: 'python.modules.fileHandling', lessons: 16 },
      { titleKey: 'python.modules.libraries', lessons: 24 },
      { titleKey: 'python.modules.projects', lessons: 12 }
    ],
    featuresCount: 6
  },
  {
    slug: 'graphic-design',
    image: courses2,
    categoryKey: 'graphic',
    category: 'design',
    rating: 4.6,
    students: 5400,
    price: 59,
    originalPrice: 119,
    color: 'secondary',
    duration: '24h',
    lessonsCount: 72,
    level: 'beginner',
    modules: [
      { titleKey: 'graphic.modules.principles', lessons: 12 },
      { titleKey: 'graphic.modules.color', lessons: 10 },
      { titleKey: 'graphic.modules.typography', lessons: 14 },
      { titleKey: 'graphic.modules.photoshop', lessons: 18 },
      { titleKey: 'graphic.modules.illustrator', lessons: 12 },
      { titleKey: 'graphic.modules.branding', lessons: 6 }
    ],
    featuresCount: 6
  },
  {
    slug: 'business-analytics',
    image: courses3,
    categoryKey: 'analytics',
    category: 'business',
    rating: 4.8,
    students: 9200,
    price: 89,
    originalPrice: 199,
    color: 'accent',
    duration: '32h',
    lessonsCount: 96,
    level: 'intermediate',
    modules: [
      { titleKey: 'analytics.modules.excel', lessons: 16 },
      { titleKey: 'analytics.modules.sql', lessons: 20 },
      { titleKey: 'analytics.modules.visualization', lessons: 18 },
      { titleKey: 'analytics.modules.statistics', lessons: 16 },
      { titleKey: 'analytics.modules.powerbi', lessons: 14 },
      { titleKey: 'analytics.modules.reporting', lessons: 12 }
    ],
    featuresCount: 6
  },
  {
    slug: 'copywriting',
    image: courses4,
    categoryKey: 'copywriting',
    category: 'marketing',
    rating: 4.5,
    students: 4100,
    price: 49,
    originalPrice: 99,
    color: 'success',
    duration: '18h',
    lessonsCount: 54,
    level: 'beginner',
    modules: [
      { titleKey: 'copywriting.modules.fundamentals', lessons: 8 },
      { titleKey: 'copywriting.modules.headlines', lessons: 10 },
      { titleKey: 'copywriting.modules.storytelling', lessons: 12 },
      { titleKey: 'copywriting.modules.sales', lessons: 10 },
      { titleKey: 'copywriting.modules.web', lessons: 8 },
      { titleKey: 'copywriting.modules.portfolio', lessons: 6 }
    ],
    featuresCount: 6
  },
  {
    slug: 'react-development',
    image: courses1,
    categoryKey: 'react',
    category: 'development',
    rating: 4.9,
    students: 14600,
    price: 99,
    originalPrice: 229,
    color: 'primary',
    duration: '44h',
    lessonsCount: 142,
    level: 'intermediate',
    modules: [
      { titleKey: 'react.modules.fundamentals', lessons: 20 },
      { titleKey: 'react.modules.hooks', lessons: 24 },
      { titleKey: 'react.modules.state', lessons: 28 },
      { titleKey: 'react.modules.routing', lessons: 18 },
      { titleKey: 'react.modules.testing', lessons: 22 },
      { titleKey: 'react.modules.deployment', lessons: 30 }
    ],
    featuresCount: 6
  },
  {
    slug: 'motion-design',
    image: courses2,
    categoryKey: 'motion',
    category: 'design',
    rating: 4.7,
    students: 6200,
    price: 89,
    originalPrice: 169,
    color: 'secondary',
    duration: '36h',
    lessonsCount: 108,
    level: 'intermediate',
    modules: [
      { titleKey: 'motion.modules.principles', lessons: 14 },
      { titleKey: 'motion.modules.afterEffects', lessons: 28 },
      { titleKey: 'motion.modules.animation', lessons: 24 },
      { titleKey: 'motion.modules.kinetic', lessons: 18 },
      { titleKey: 'motion.modules.character', lessons: 16 },
      { titleKey: 'motion.modules.showreel', lessons: 8 }
    ],
    featuresCount: 6
  },
  {
    slug: 'sql-databases',
    image: courses3,
    categoryKey: 'sql',
    category: 'business',
    rating: 4.8,
    students: 11000,
    price: 69,
    originalPrice: 139,
    color: 'accent',
    duration: '28h',
    lessonsCount: 84,
    level: 'beginner',
    modules: [
      { titleKey: 'sql.modules.basics', lessons: 14 },
      { titleKey: 'sql.modules.queries', lessons: 18 },
      { titleKey: 'sql.modules.joins', lessons: 16 },
      { titleKey: 'sql.modules.aggregation', lessons: 12 },
      { titleKey: 'sql.modules.optimization', lessons: 14 },
      { titleKey: 'sql.modules.realWorld', lessons: 10 }
    ],
    featuresCount: 6
  },
  {
    slug: 'social-media-marketing',
    image: courses4,
    categoryKey: 'smm',
    category: 'marketing',
    rating: 4.6,
    students: 7500,
    price: 59,
    originalPrice: 129,
    color: 'success',
    duration: '22h',
    lessonsCount: 68,
    level: 'beginner',
    modules: [
      { titleKey: 'smm.modules.strategy', lessons: 10 },
      { titleKey: 'smm.modules.content', lessons: 14 },
      { titleKey: 'smm.modules.instagram', lessons: 12 },
      { titleKey: 'smm.modules.tiktok', lessons: 10 },
      { titleKey: 'smm.modules.ads', lessons: 14 },
      { titleKey: 'smm.modules.analytics', lessons: 8 }
    ],
    featuresCount: 6
  }
]

export const getCourseBySlug = (slug: string): Course | undefined => {
  return courses.find((course) => course.slug === slug)
}
