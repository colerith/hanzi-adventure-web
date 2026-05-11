import { pinyin } from 'pinyin-pro'

export function toTonePinyin(text: string): string {
  return pinyin(text, {
    toneType: 'symbol',
    type: 'array',
  }).join(' ')
}
