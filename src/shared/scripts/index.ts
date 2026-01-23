import { vhFix } from '@shared/scripts/modules/vh-fix'
import '@/i18n/i18n-client'

document.addEventListener(
  'DOMContentLoaded',
  () => {
    vhFix()
  },
  true
)
