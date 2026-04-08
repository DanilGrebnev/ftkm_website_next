export interface ILoginUserRequestDTO {
  login: string
  password: string
}

export interface ILoginUserResponseDTO {
  success?: boolean
  error?: string
}
