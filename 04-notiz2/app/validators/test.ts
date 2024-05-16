import vine from '@vinejs/vine'

export const testValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(6),
    text: vine.string().trim(),
  })
)
