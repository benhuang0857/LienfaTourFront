export type Country = {
  country: {
    id: string
    number: string
    ch_name: string
    en_name: string
    continent_id: string
    telarea_code: string
    currency: string
    created_at: string
    updated_at: string
  }
}

export type CountryOption = {
  country: {
    id: string
    ch_name: string
  }
}
