package com.burak.urlshortener.service;

import com.burak.urlshortener.model.Url;
import com.burak.urlshortener.repository.UrlRepository;
import com.burak.urlshortener.request.UrlCreateRequest;
import com.burak.urlshortener.response.UrlCreateResponse;
import org.springframework.stereotype.Service;

import java.security.MessageDigest;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import static java.nio.charset.StandardCharsets.*;

@Service
public class UrlService {
    private final UrlRepository urlRepository;

    public UrlService(UrlRepository urlRepository) {
        this.urlRepository = urlRepository;
    }

    public UrlCreateResponse shortUrlGenerate(UrlCreateRequest urlCreateRequest){
        //original url ve expiration date i geldi request olarak
        //original url e gore short linki SHA-256 Algoritmasıyla üretiyorum
        //altta private bi fonksiyonum var ona cagrida bulunacagim.
        //donen deger bir shorturl olacak artik.
        Url url=new Url();
        url.setShortUrl(generateHashValue(urlCreateRequest.getOriginalUrl()));
        url.setOriginalUrl(urlCreateRequest.getOriginalUrl());
        url.setCreationDate(LocalDateTime.now());
        url.setExpireDate(
                urlCreateRequest.getExpireDate() == null ?
                        LocalDateTime.MAX : urlCreateRequest.getExpireDate());
        urlRepository.save(url);
        return urlToResponseDto(url);
        //url entity si oluşturup, oluşturulduğuna dair bir geri dönüş yapar
        //request-response kullan.
    }
    private String generateHashValue(String originalUrl){
        StringBuilder hexString = new StringBuilder();
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] encodedHash = digest.digest(originalUrl.getBytes(UTF_8));
            for (byte b : encodedHash) {
                String hex = Integer.toHexString(0xff & b);
                if (hex.length() == 1) {
                    hexString.append('0');
                }
                hexString.append(hex);
            }
        } catch (Exception e) {
            e.printStackTrace(); //bi exception yazmak lazim buraya. Sonra yazicam
        }
        return hexString.substring(0,8);
    }
    public List<UrlCreateResponse> getAllUrl(){
        return urlRepository.findAll().stream()
                .map(this::urlToResponseDto).collect(Collectors.toList());
    }
    public Url getUrlByShortLink(String shortLink){
       return urlRepository.findByShortLink(shortLink);
    }
    public void deleteUrl(String shortLink){
        urlRepository.delete(getUrlByShortLink(shortLink));
    }

    private UrlCreateResponse urlToResponseDto(Url url){
        UrlCreateResponse urlCreateResponse=new UrlCreateResponse();
        urlCreateResponse.setOriginalUrl(url.getOriginalUrl());
        urlCreateResponse.setShortUrl(url.getShortUrl());
        urlCreateResponse.setCreationDate(url.getCreationDate());
        urlCreateResponse.setExpireDate(url.getExpireDate());
        return urlCreateResponse;
    }



}
