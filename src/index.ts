export default class FileSignatures {
    
    detectMimeType(base64: string) {
			for (const base64Element in signatures) {
				if (base64.indexOf(base64Element) === 0) {
					return signatures[base64Element];
				}
			}
    }
}