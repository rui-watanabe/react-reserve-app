export function authVerify(text: string | undefined): boolean {
  if (typeof text === 'string') {
    return true;
  } else {
    return false;
  }
}
