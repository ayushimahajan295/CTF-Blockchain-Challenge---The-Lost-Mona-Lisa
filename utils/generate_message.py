from ecdsa import SECP256k1, SigningKey
import hashlib

#signed_message = "" - the message to be decrypted
message_hash = hashlib.sha256(signed_message.encode()).hexdigest()

private_key = SigningKey.generate(curve=SECP256k1)
public_key = private_key.get_verifying_key()

message_hash_bytes = bytes.fromhex(message_hash)
signature = private_key.sign(message_hash_bytes)

if len(signature) != 64:
    raise ValueError(f"Expected signature length of 64, but got {len(signature)}")

r = int.from_bytes(signature[:32], byteorder="big")
s = int.from_bytes(signature[32:64], byteorder="big")
v = 27  

with open("cipher.txt", "w") as file:
    file.write(f"Encrypted signed message: {message_hash}\n")
    file.write(f"r: {r}\n")
    file.write(f"s: {s}\n")
    file.write(f"v: {v}\n")

