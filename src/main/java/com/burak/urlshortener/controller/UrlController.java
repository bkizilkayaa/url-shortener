package com.burak.urlshortener.controller;

import com.burak.urlshortener.request.UrlCreateRequest;
import com.burak.urlshortener.response.UrlCreateResponse;
import com.burak.urlshortener.service.UrlService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import static org.springframework.http.HttpStatus.*;

@RestController
@RequestMapping("api/v1/url")
public class UrlController {
    private final UrlService urlService;
    public UrlController(UrlService urlService) {
        this.urlService = urlService;
    }

    @GetMapping
    public ResponseEntity<List<UrlCreateResponse>> getAllUrls(){
        return new ResponseEntity<>(urlService.getAllUrl(), OK);
    }

    @PostMapping("/{originalurl}")
    public ResponseEntity<UrlCreateResponse> generateShortLink(@PathVariable String originalurl,
                                                               @RequestParam Optional<LocalDateTime> expireDate){
        UrlCreateRequest urlCreateRequest=new UrlCreateRequest();
        urlCreateRequest.setOriginalUrl(originalurl);
        urlCreateRequest.setExpireDate(expireDate.orElse(null));
        return new ResponseEntity<>(urlService.shortUrlGenerate(urlCreateRequest),CREATED);
    }

    @DeleteMapping("/{shortlink}")
    public void deleteUrl(@PathVariable String shortlink){
        urlService.deleteUrl(shortlink);
    }
}
